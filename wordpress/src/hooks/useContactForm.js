import { useEffect } from 'react';

import { sendEnquiryEmail } from '../utils/sendEnquiryEmail';
import { validateEmail, validatePhone } from '../utils/formValidation';

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
    name:
      form.querySelector('[name="form_fields[name]"]')?.value?.trim() ||
      form.querySelector('[name="form_fields[Name]"]')?.value?.trim() ||
      '',
    phone:
      form.querySelector('[name="form_fields[phone]"]')?.value?.trim() ||
      form.querySelector('[name="form_fields[Number]"]')?.value?.trim() ||
      form.querySelector('[name="form_fields[field_7cdd53b]"]')?.value?.trim() ||
      '',
    email: form.querySelector('[name="form_fields[email]"]')?.value?.trim() || '',
    courseName:
      form.querySelector('[name="form_fields[message]"]')?.value?.trim() ||
      form.querySelector('[name="form_fields[Message]"]')?.value?.trim() ||
      '',
  };
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const fields = extractFields(form);

  if (!fields.name || !fields.email || !fields.phone) {
    showFormMessage(form, 'Please fill in your name, phone number, and email.', 'danger');
    return;
  }

  const phoneError = validatePhone(fields.phone);
  if (phoneError) {
    showFormMessage(form, phoneError, 'danger');
    form.querySelector('[type="tel"]')?.focus();
    return;
  }

  const emailError = validateEmail(fields.email);
  if (emailError) {
    showFormMessage(form, emailError, 'danger');
    form.querySelector('[type="email"]')?.focus();
    return;
  }

  if (submitButton) submitButton.disabled = true;

  try {
    const result = await sendEnquiryEmail({
      ...fields,
      source: 'Contact Us page',
    });

    if (result.success) {
      showFormMessage(
        form,
        result.viaMailto
          ? 'Your email app is opening — please tap Send to complete your message.'
          : 'Thanks! Your message has been sent. Our team will get back to you shortly.',
        'success',
      );
      form.reset();
      return;
    }

    showFormMessage(
      form,
      result.message || 'Unable to send your message. Please try again or email support@ibridge360.com.',
      'danger',
    );
  } catch {
    showFormMessage(
      form,
      'Unable to send right now. Please email support@ibridge360.com or call +91 9611260360.',
      'danger',
    );
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}

function useContactForm() {
  useEffect(() => {
    const root = document.querySelector('.elementor-29');
    if (!root) return undefined;

    const forms = Array.from(root.querySelectorAll('.elementor-form'));
    forms.forEach((form) => {
      form.addEventListener('submit', handleFormSubmit);
    });

    return () => {
      forms.forEach((form) => {
        form.removeEventListener('submit', handleFormSubmit);
      });
    };
  }, []);
}

export default useContactForm;
