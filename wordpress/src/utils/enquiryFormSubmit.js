import { GlassToast } from './glassToast';
import { closeEnquirePopup } from '../constants/enquirePopupLink';
import { saveMarketingEnquiry } from './saveMarketingEnquiry';
import { validateEmail, validatePhone } from './formValidation';
import { withBase } from './siteBase';

const MSG_SAVE_FAIL =
  'Unable to save your enquiry. Please try again or email support@ibridge360.com.';
const MSG_NETWORK_FAIL =
  'Unable to save right now. Please email support@ibridge360.com or call +91 9611260360.';
const MSG_REQUIRED = 'Please fill in your name, mobile number, and email.';
const THANK_YOU_PATH = '/thank-you';

function redirectToThankYou() {
  if (typeof window === 'undefined') return;
  closeEnquirePopup();
  window.location.assign(withBase(THANK_YOU_PATH));
}

export function showFormMessage(container, text, type) {
  if (!container) return;

  let message = container.querySelector('[data-form-message], .elementor-message');
  if (!message) {
    message = document.createElement('div');
    message.setAttribute('data-form-message', '');
    message.className = 'elementor-message';
    container.appendChild(message);
  }

  message.className = `elementor-message elementor-message-${type}`;
  message.textContent = text;
  message.style.display = 'block';
  message.hidden = false;
}

function notifyUser(text, type, messageContainer, mode) {
  if (mode === 'toast') {
    if (type === 'success') GlassToast.success(text);
    else GlassToast.error(text);
    return;
  }
  showFormMessage(messageContainer, text, type === 'success' ? 'success' : 'danger');
}

function isEnquirePopupForm(form) {
  if (!form) return false;
  return Boolean(
    form.closest('.enquire-popup') ||
      form.closest('.elementor-location-popup') ||
      form.closest('#elementor-popup-modal-17162'),
  );
}

/**
 * Submit an enquiry from structured field values.
 *
 * @param {Object} fields
 * @param {'inline'|'toast'} [fields.notifyMode]
 */
export async function submitEnquiry(fields) {
  const {
    name,
    phone,
    email,
    courseName = '',
    coursePrice = '',
    learnerType = '',
    message: userMessage = '',
    source = 'Enquiry form',
    messageContainer,
    notifyMode = 'inline',
  } = fields;

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    notifyUser(MSG_REQUIRED, 'error', messageContainer, notifyMode);
    return { success: false };
  }

  const phoneError = validatePhone(phone);
  if (phoneError) {
    notifyUser(phoneError, 'error', messageContainer, notifyMode);
    return { success: false, field: 'phone', message: phoneError };
  }

  const emailError = validateEmail(email);
  if (emailError) {
    notifyUser(emailError, 'error', messageContainer, notifyMode);
    return { success: false, field: 'email', message: emailError };
  }

  try {
    const result = await saveMarketingEnquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      courseName: courseName.trim(),
      coursePrice: coursePrice.trim(),
      learnerType: learnerType.trim(),
      message: userMessage.trim(),
      source,
    });

    if (result.success) {
      redirectToThankYou();
      return { success: true, reset: true, submitted: true, redirected: true };
    }

    const failText = result.message || MSG_SAVE_FAIL;
    notifyUser(failText, 'error', messageContainer, notifyMode);
    return { success: false, submitted: true, message: failText };
  } catch {
    notifyUser(MSG_NETWORK_FAIL, 'error', messageContainer, notifyMode);
    return { success: false, submitted: true, message: MSG_NETWORK_FAIL };
  }
}

/** Submit an Elementor-style enquiry form (program page + popup). */
export async function submitEnquiryFormElementor(event, { source = 'Enquiry form' } = {}) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const messageContainer =
    form.closest('.ibridge-enquiry-form') ||
    form.closest('.elementor-widget-form') ||
    form;

  const inPopup = isEnquirePopupForm(form);
  const notifyMode = inPopup ? 'toast' : 'inline';

  const courseEl = form.querySelector('[name="form_fields[course]"]');
  const coursePriceEl = form.querySelector('[name="form_fields[coursePrice]"]');
  const sourceEl = form.querySelector('[name="form_fields[enquirySource]"]');
  const effectiveSource = sourceEl?.value?.trim() || source;

  if (submitButton) submitButton.disabled = true;

  const result = await submitEnquiry({
    name: form.querySelector('[name="form_fields[name]"]')?.value || '',
    phone: form.querySelector('[name="form_fields[message]"][type="tel"]')?.value || '',
    email: form.querySelector('[name="form_fields[email]"]')?.value || '',
    courseName: courseEl?.value || '',
    coursePrice: coursePriceEl?.value || '',
    source: effectiveSource,
    messageContainer,
    notifyMode,
  });

  if (inPopup && result.submitted) {
    closeEnquirePopup();
  }

  if (result.reset) {
    form.reset();
    if (courseEl && courseEl.dataset.defaultCourse) {
      courseEl.value = courseEl.dataset.defaultCourse;
    }
  }
  if (submitButton) submitButton.disabled = false;

  return result;
}

/** Legacy Elementor popup handler — kept for any remaining DOM forms. */
export async function submitEnquireForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const messageContainer = form.querySelector('[data-form-body]') || form;

  const courseEl =
    form.querySelector('[name="form_fields[course]"]') ||
    form.querySelector('[name="form_fields[message]"]');

  if (submitButton) submitButton.disabled = true;

  const inPopup = isEnquirePopupForm(form);
  const notifyMode = inPopup ? 'toast' : 'inline';

  const result = await submitEnquiry({
    name:
      form.querySelector('[name="form_fields[name]"]')?.value ||
      form.querySelector('[name="form_fields[Name]"]')?.value ||
      '',
    phone:
      form.querySelector('[name="form_fields[message]"][type="tel"]')?.value ||
      form.querySelector('[name="form_fields[Number]"]')?.value ||
      '',
    email: form.querySelector('[name="form_fields[email]"]')?.value || '',
    courseName: courseEl?.value || '',
    source: 'Enquire popup',
    messageContainer,
    notifyMode,
  });

  if (inPopup && result.submitted) {
    closeEnquirePopup();
  }

  if (result.reset) form.reset();
  if (submitButton) submitButton.disabled = false;
}
