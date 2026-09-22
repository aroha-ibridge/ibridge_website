import { useId, useState } from 'react';

import { Button, Field, Input, Label, Select, Textarea } from '../../ui';
import { submitEnquiry, showFormMessage } from '../../../utils/enquiryFormSubmit';
import { validateEmail, validatePhone } from '../../../utils/formValidation';

const FIELD_CLASS =
  '!rounded-xl !border !border-gray-400 !bg-white hover:!border-gray-400 focus:!border-blue-700 focus:!ring-blue-700/15';

const INVALID_CLASS = '!border-red-500 focus:!border-red-600 focus:!ring-red-500/15';

function ContactUsForm({
  learnerOptions = [],
  source = 'Contact Us page',
  eyebrow = 'Message',
  title = 'Send us a note',
  subtitle = 'Share a few details and our learning advisors will get back to you.',
}) {
  const reactId = useId();
  const prefix = reactId.replace(/:/g, '');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({ phone: '', email: '' });

  const field = (name) => `contact-form-${name}-${prefix}`;

  const clearFieldError = (key) => {
    setErrors((prev) => (prev[key] ? { ...prev, [key]: '' } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const learnerType = data.get('learnerType')?.toString() || '';
    const message = data.get('message')?.toString().trim() || '';

    const nextErrors = {
      phone: validatePhone(phone),
      email: validateEmail(email),
    };
    setErrors(nextErrors);

    if (nextErrors.phone || nextErrors.email) {
      const firstInvalidId = nextErrors.phone ? field('phone') : field('email');
      form.querySelector(`#${CSS.escape(firstInvalidId)}`)?.focus();
      setSubmitting(false);
      return;
    }

    const result = await submitEnquiry({
      name,
      phone,
      email,
      learnerType,
      courseName: learnerType,
      message: message || `Inquiry from ${learnerType}`,
      source,
      messageContainer: form,
    });

    if (result.success) {
      form.reset();
      setErrors({ phone: '', email: '' });
      if (!result.redirected) {
        showFormMessage(
          form,
          'Thanks! Your message has been sent. Our team will get back to you shortly.',
          'success',
        );
      }
    }

    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="company-contact-form"
      noValidate
    >
      <div className="company-contact-form__header">
        <span className="company-contact-form__eyebrow">{eyebrow}</span>
        <h2 className="company-contact-form__title">{title}</h2>
        <p className="company-contact-form__subtitle">{subtitle}</p>
      </div>

      <div className="company-contact-form__body">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <Label htmlFor={field('name')}>Name</Label>
            <Input id={field('name')} name="name" placeholder="Your full name" required className={FIELD_CLASS} />
          </Field>
          <Field error={errors.email}>
            <Label htmlFor={field('email')}>Email</Label>
            <Input
              id={field('email')}
              name="email"
              type="email"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              placeholder="you@email.com"
              required
              aria-invalid={Boolean(errors.email)}
              className={`${FIELD_CLASS}${errors.email ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('email')}
            />
          </Field>
          <Field error={errors.phone}>
            <Label htmlFor={field('phone')}>Phone</Label>
            <Input
              id={field('phone')}
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="9876543210 or +91 9876543210"
              required
              aria-invalid={Boolean(errors.phone)}
              className={`${FIELD_CLASS}${errors.phone ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('phone')}
            />
          </Field>
          <Field>
            <Label htmlFor={field('learnerType')}>Who you are</Label>
            <Select id={field('learnerType')} name="learnerType" required defaultValue="" className={FIELD_CLASS}>
              <option value="" disabled>
                Select one
              </option>
              {learnerOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field className="sm:col-span-2">
            <Label htmlFor={field('message')}>Message</Label>
            <Textarea
              id={field('message')}
              name="message"
              rows={4}
              placeholder="Tell us how we can help — programs, partnerships, or training goals"
              required
              className={FIELD_CLASS}
            />
          </Field>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted leading-relaxed max-w-xs">
            By sending this form, you agree to be contacted by iBridge360 about your enquiry.
          </p>
          <Button type="submit" size="lg" disabled={submitting} className="!rounded-xl shrink-0 w-full sm:w-auto">
            {submitting ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ContactUsForm;
