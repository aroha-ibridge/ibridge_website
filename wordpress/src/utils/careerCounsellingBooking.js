/**
 * Public Cal.com booking — no sign-in.
 * Saves guest form data via POST /api/marketing-enquiries (public API),
 * tagged so it appears under Admin → Counselling Requests.
 * Optional Web3Forms email to support@ (never mailto / never new tabs).
 */

import { saveMarketingEnquiry } from './saveMarketingEnquiry';
import { validateEmail, validatePhone } from './formValidation';
import { BOOKING_CONFIG } from './careerCounsellingSlots';

export const CAREER_COUNSELLING_SOURCE = 'Career Counselling Booking';
export const SUPPORT_EMAIL =
  import.meta.env.PUBLIC_ENQUIRY_TO_EMAIL ||
  import.meta.env.VITE_ENQUIRY_TO_EMAIL ||
  'support@ibridge360.com';

const WEB3FORMS_KEY =
  import.meta.env.PUBLIC_WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_KEY || '';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

/**
 * Compact structured message for admin parsing — avoid repeating name/email/phone
 * (those already have dedicated API fields).
 */
function buildMessage(fields) {
  return [
    `Education: ${fields.education}`,
    `City: ${fields.city}`,
    `Slot: ${fields.scheduledLabel}`,
    `Timezone: ${fields.timezone}`,
    `ISO: ${fields.scheduledIso}`,
    `Reason: ${fields.reason}`,
  ].join('\n');
}

async function notifySupportEmail(fields) {
  if (!WEB3FORMS_KEY) return { success: false, skipped: true };

  const emailBody = [
    'New public career counselling booking.',
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Education: ${fields.education}`,
    `City: ${fields.city}`,
    `Slot: ${fields.scheduledLabel}`,
    `Reason: ${fields.reason}`,
  ].join('\n');

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Career Counselling — ${fields.name} — ${fields.scheduledLabel}`,
        from_name: fields.name || 'iBridge360 Booking',
        to: SUPPORT_EMAIL,
        replyto: fields.email || '',
        name: fields.name,
        phone: fields.phone,
        email: fields.email,
        message: emailBody,
      }),
    });
    const data = await response.json().catch(() => null);
    return { success: Boolean(response.ok && data?.success) };
  } catch {
    return { success: false };
  }
}

/**
 * Guest booking from form fields only — no auth.
 */
export async function submitCareerCounsellingBooking(input) {
  const name = input.name?.trim() || '';
  const email = input.email?.trim() || '';
  const phone = input.phone?.trim() || '';
  const education = input.education?.trim() || '';
  const city = input.city?.trim() || '';
  const reason = input.reason?.trim() || '';

  if (!name) return { success: false, field: 'name', message: 'Please enter your name.' };
  const emailError = validateEmail(email);
  if (emailError) return { success: false, field: 'email', message: emailError };
  const phoneError = validatePhone(phone);
  if (phoneError) return { success: false, field: 'phone', message: phoneError };
  if (!education) {
    return { success: false, field: 'education', message: 'Education is required.' };
  }
  if (!city) {
    return { success: false, field: 'city', message: 'City is required.' };
  }
  if (!reason) {
    return { success: false, field: 'reason', message: 'Reason is required.' };
  }
  if (!input.scheduledIso) {
    return { success: false, field: 'slot', message: 'Please select a time slot.' };
  }

  const fields = {
    name,
    email,
    phone,
    education,
    city,
    reason,
    scheduledIso: input.scheduledIso,
    scheduledLabel: input.scheduledLabel,
    timezone: input.timezone || BOOKING_CONFIG.defaultTimezone,
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
  };

  const message = buildMessage(fields);

  const saveResult = await saveMarketingEnquiry({
    name,
    phone,
    email,
    courseName: BOOKING_CONFIG.title,
    coursePrice: fields.scheduledLabel,
    learnerType: 'Career Counselling',
    message,
    source: CAREER_COUNSELLING_SOURCE,
    type: 'enquiry',
    pageUrl: fields.pageUrl,
  });

  if (!saveResult.success) {
    return {
      success: false,
      message:
        saveResult.message ||
        'Unable to save your booking. Please try again or email support@ibridge360.com.',
    };
  }

  // Best-effort notify — never opens new tabs
  await notifySupportEmail(fields);

  return {
    success: true,
    saved: true,
    data: saveResult.data,
  };
}
