import { saveMarketingEnquiry } from './saveMarketingEnquiry';

function showFormMessage(form, text, type) {
  const widget = form.closest('.elementor-widget-form');
  if (!widget) return;

  let message = widget.querySelector('.elementor-message');
  if (!message) {
    message = document.createElement('div');
    message.className = 'elementor-message';
    form.parentElement?.appendChild(message);
  }

  message.className = `elementor-message elementor-message-${type}`;
  message.textContent = text;
  message.style.display = 'block';
}

function extractFields(form) {
  return {
    name: form.querySelector('[name="form_fields[Name]"]')?.value?.trim() || '',
    phone: form.querySelector('[name="form_fields[Number]"]')?.value?.trim() || '',
    email: form.querySelector('[name="form_fields[email]"]')?.value?.trim() || '',
    courseName: form.querySelector('[name="form_fields[message]"]')?.value?.trim() || '',
  };
}

export async function submitEnquireForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const fields = extractFields(form);

  if (!fields.name || !fields.phone || !fields.email) {
    showFormMessage(form, 'Please fill in your name, phone, and email.', 'danger');
    return;
  }

  if (submitButton) submitButton.disabled = true;

  try {
    const result = await saveMarketingEnquiry({
      ...fields,
      source: 'Enquire popup',
    });

    if (result.success) {
      showFormMessage(
        form,
        'Thanks! Your enquiry has been received. Our team will get back to you shortly.',
        'success',
      );
      form.reset();
      return;
    }

    showFormMessage(
      form,
      result.message || 'Unable to save your enquiry. Please try again or email support@ibridge360.com.',
      'danger',
    );
  } catch {
    showFormMessage(
      form,
      'Unable to save right now. Please email support@ibridge360.com or call +91 9611260360.',
      'danger',
    );
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}
