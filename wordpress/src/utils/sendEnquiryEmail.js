/**
 * Sends enquiry form data via email.
 *
 * Uses Web3Forms (https://web3forms.com) when an access key is configured
 * in `VITE_WEB3FORMS_KEY`. Otherwise falls back to opening the user's mail
 * client with `mailto:` so the app works without any external setup.
 *
 * Set these in a `.env` file at the project root:
 *   VITE_ENQUIRY_TO_EMAIL=info@ibridge360.com
 *   VITE_WEB3FORMS_KEY=your-web3forms-access-key   (optional)
 */

const TO_EMAIL =
  import.meta.env.PUBLIC_ENQUIRY_TO_EMAIL ||
  import.meta.env.VITE_ENQUIRY_TO_EMAIL ||
  'support@ibridge360.com';
const WEB3FORMS_KEY =
  import.meta.env.PUBLIC_WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_KEY || '';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

function buildSubject(source, courseName) {
  const parts = ['iBridge360 Enquiry'];
  if (source) parts.push(source);
  if (courseName) parts.push(`— ${courseName}`);
  return parts.join(' ');
}

function buildPlainTextBody(fields) {
  const lines = [
    'New enquiry received from the iBridge360 website.',
    '',
    `Name:    ${fields.name || '(not provided)'}`,
    `Phone:   ${fields.phone || '(not provided)'}`,
    `Email:   ${fields.email || '(not provided)'}`,
  ];

  if (fields.courseName) {
    lines.push(`Course:  ${fields.courseName}`);
  }

  if (fields.learnerType) {
    lines.push(`Type:    ${fields.learnerType}`);
  }

  if (fields.message) {
    lines.push(`Message: ${fields.message}`);
  }

  lines.push(
    `Source:  ${fields.source || 'Enquire form'}`,
    `Page:    ${fields.pageUrl || ''}`,
    `Date:    ${new Date().toLocaleString()}`,
  );

  return lines.join('\n');
}

async function sendViaWeb3Forms(fields) {
  const payload = {
    access_key: WEB3FORMS_KEY,
    subject: buildSubject(fields.source, fields.courseName),
    from_name: fields.name || 'iBridge360 Website',
    to: TO_EMAIL,
    replyto: fields.email || '',
    name: fields.name || '',
    phone: fields.phone || '',
    email: fields.email || '',
    course: fields.courseName || '',
    learner_type: fields.learnerType || '',
    user_message: fields.message || '',
    source: fields.source || '',
    page: fields.pageUrl || '',
    message: buildPlainTextBody(fields),
  };

  const response = await fetch(WEB3FORMS_URL, {
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
    // ignore
  }

  if (response.ok && data?.success) return { success: true };

  return {
    success: false,
    message: data?.message || 'Unable to send your enquiry. Please try again.',
  };
}

function sendViaMailto(fields) {
  const subject = buildSubject(fields.source, fields.courseName);
  const body = buildPlainTextBody(fields);
  const mailto = `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  return { success: true, viaMailto: true };
}

/**
 * @param {Object} fields
 * @param {string} fields.name
 * @param {string} fields.phone
 * @param {string} fields.email
 * @param {string} [fields.courseName]
 * @param {string} [fields.source]      e.g. "Enquire popup", "Contact page"
 * @param {string} [fields.pageUrl]     Defaults to current URL
 */
export async function sendEnquiryEmail(fields) {
  const payload = {
    ...fields,
    pageUrl: fields.pageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
  };

  if (WEB3FORMS_KEY) {
    return sendViaWeb3Forms(payload);
  }

  return sendViaMailto(payload);
}
