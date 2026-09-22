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

  try {
    const response = await fetch(learnerApiUrl('/api/marketing-enquiries'), {
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

    if (response.ok) {
      return {
        success: true,
        data: data?.data,
      };
    }

    return {
      success: false,
      message:
        data?.message ||
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
