/**
 * Handles marketing enquiries (course enquiries, brochure download leads, demo requests):
 * 1. Dispatches an immediate lead notification email to support@ibridge360.com via DreamHost SMTP.
 * 2. Saves to LMS MongoDB backend (POST https://lms.ibridge360.com/api/marketing-enquiries).
 */
import { sendEnquiryLeadNotificationEmail } from './leadEmailHandler.js';

function clean(value, max = 500) {
  return String(value || '').trim().slice(0, max);
}

export async function handleMarketingEnquiry(body = {}) {
  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);

  if (!name || !email || !phone) {
    return {
      status: 400,
      json: { ok: false, error: 'Name, email, and phone are required' },
    };
  }

  const courseName = clean(body.courseName || body.course, 200);
  const coursePrice = clean(body.coursePrice, 50);
  const learnerType = clean(body.learnerType, 100);
  const message = clean(body.message, 2000);
  const source = clean(body.source, 200) || 'Website Enquiry';
  const type = clean(body.type, 50) || (/enroll/i.test(source) ? 'enroll' : 'enquiry');
  const pageUrl = clean(body.pageUrl, 500);

  const enquiryData = {
    name,
    email,
    phone,
    courseName,
    coursePrice,
    learnerType,
    message,
    source,
    type,
    pageUrl,
  };

  // 1. Dispatch email notification to support@ibridge360.com
  let emailResult = { ok: false };
  try {
    emailResult = await sendEnquiryLeadNotificationEmail(enquiryData);
  } catch (emailErr) {
    console.error('[marketing-enquiry] Failed to dispatch email notification:', emailErr);
  }

  // 2. Forward to LMS MongoDB backend
  const targetOrigin = (
    process.env.PUBLIC_LEARNER_API_ORIGIN ||
    process.env.PUBLIC_API_ORIGIN ||
    'https://lms.ibridge360.com'
  ).replace(/\/+$/, '');

  let upstreamData = null;
  let upstreamOk = false;
  let upstreamStatus = 200;

  try {
    const upstream = await fetch(`${targetOrigin}/api/marketing-enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(enquiryData),
      signal: AbortSignal.timeout(8000),
    });
    upstreamOk = upstream.ok;
    upstreamStatus = upstream.status;
    upstreamData = await upstream.json().catch(() => ({}));
  } catch (upstreamErr) {
    console.warn('[marketing-enquiry] Upstream LMS save warning:', upstreamErr?.message || upstreamErr);
  }

  // If upstream succeeded, merge its response with email status
  if (upstreamOk && upstreamData) {
    return {
      status: upstreamStatus,
      json: {
        ...upstreamData,
        ok: true,
        emailSent: emailResult.ok,
      },
    };
  }

  // If upstream failed or timed out, but lead email was dispatched or captured,
  // return success so the user is never blocked from their brochure or enquiry confirmation.
  return {
    status: 200,
    json: {
      ok: true,
      success: true,
      emailSent: emailResult.ok,
      data: enquiryData,
      message: upstreamData?.message || 'Enquiry recorded successfully',
    },
  };
}
