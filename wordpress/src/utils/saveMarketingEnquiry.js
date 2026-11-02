/**
 * Saves Enquire / Enroll form submissions to the backend API
 * (POST /api/marketing-enquiries → MongoDB marketingEnquiries collection).
 */
import { learnerApiUrl } from '../constants/apiOrigins';

function inferSubmissionType(source = '') {
  return /enroll/i.test(source) ? 'enroll' : 'enquiry';
}

/**
 * @param {Object} fields
 * @returns {Promise<{ success: boolean, message?: string, data?: object }>}
 */
export async function saveMarketingEnquiry(fields) {
  const payload = {
    name: fields.name?.trim() || '',
    phone: fields.phone?.trim() || '',
    email: fields.email?.trim() || '',
    courseName: fields.courseName?.trim() || '',
    coursePrice: fields.coursePrice?.trim() || '',
    learnerType: fields.learnerType?.trim() || '',
    message: fields.message?.trim() || '',
    source: fields.source?.trim() || 'Enquiry form',
    type: fields.type || inferSubmissionType(fields.source),
    pageUrl:
      fields.pageUrl ||
      (typeof window !== 'undefined' ? window.location.href : ''),
  };

  const primaryUrl = learnerApiUrl('/api/marketing-enquiries');
  const fallbackUrl = '/api/marketing-enquiries';

  async function postJson(url) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let data = null;
    try {
      data = await response.json();
    } catch {
      // ignore parse errors
    }
    return { ok: response.ok, status: response.status, data };
  }

  try {
    let result = null;
    try {
      result = await postJson(primaryUrl);
    } catch (primaryErr) {
      if (primaryUrl !== fallbackUrl) {
        result = await postJson(fallbackUrl);
      } else {
        throw primaryErr;
      }
    }

    if (result && result.ok) {
      return {
        success: true,
        data: result.data?.data,
      };
    }

    return {
      success: false,
      message:
        result?.data?.message ||
        'Unable to save your enquiry. Please try again or call +91 9611260360.',
    };
  } catch {
    return {
      success: false,
      message:
        'Unable to save right now. Please try again or email support@ibridge360.com.',
    };
  }
}
