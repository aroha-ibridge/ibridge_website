import { useState } from 'react';

import { LEAD_FORM } from '../../content/chatbot/chatbotKnowledge';
import { saveMarketingEnquiry } from '../../utils/saveMarketingEnquiry';
import { validateEmail, validatePhone } from '../../utils/formValidation';

/**
 * "Talk to our team" card rendered inside the chat thread.
 *
 * Collects exactly what the Contact Us page collects and submits through the
 * same POST /api/marketing-enquiries endpoint, so chat leads land in the same
 * marketingEnquiries collection as every other form on the site.
 */
function ChatLeadForm({ topicLabel = '', onSubmitted }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    learnerType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState('');

  const set = (key) => (e) => {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: '' } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const next = {};
    if (!values.name.trim()) next.name = 'Please tell us your name.';
    const emailError = validateEmail(values.email);
    if (emailError) next.email = emailError;
    const phoneError = validatePhone(values.phone);
    if (phoneError) next.phone = phoneError;
    if (!values.learnerType) next.learnerType = 'Please pick one.';

    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setFailed('');

    const result = await saveMarketingEnquiry({
      name: values.name,
      email: values.email,
      phone: values.phone,
      learnerType: values.learnerType,
      courseName: values.learnerType,
      message:
        values.message.trim() ||
        `Chat enquiry${topicLabel ? ` about ${topicLabel}` : ''}`,
      source: topicLabel ? `${LEAD_FORM.source} — ${topicLabel}` : LEAD_FORM.source,
    });

    setSending(false);

    if (result.success) {
      onSubmitted?.(values);
      return;
    }
    setFailed(
      result.message ||
        'Something went wrong. Please email support@ibridge360.com or call +91 96112 60360.',
    );
  };

  return (
    <form className="ibc-lead" onSubmit={handleSubmit} noValidate>
      <div className="ibc-lead__head">
        <span className="ibc-lead__title">{LEAD_FORM.title}</span>
        <span className="ibc-lead__sub">{LEAD_FORM.subtitle}</span>
      </div>

      <label className="ibc-lead__field">
        <span>Name</span>
        <input
          type="text"
          value={values.name}
          onChange={set('name')}
          placeholder="Your full name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <em>{errors.name}</em>}
      </label>

      <label className="ibc-lead__field">
        <span>Email</span>
        <input
          type="email"
          value={values.email}
          onChange={set('email')}
          placeholder="you@email.com"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <em>{errors.email}</em>}
      </label>

      <label className="ibc-lead__field">
        <span>Phone</span>
        <input
          type="tel"
          value={values.phone}
          onChange={set('phone')}
          placeholder="9876543210"
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <em>{errors.phone}</em>}
      </label>

      <label className="ibc-lead__field">
        <span>Who you are</span>
        <select
          value={values.learnerType}
          onChange={set('learnerType')}
          aria-invalid={Boolean(errors.learnerType)}
        >
          <option value="" disabled>
            Select one
          </option>
          {LEAD_FORM.learnerOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.learnerType && <em>{errors.learnerType}</em>}
      </label>

      <label className="ibc-lead__field">
        <span>
          What do you need? <i>optional</i>
        </span>
        <textarea
          rows={2}
          value={values.message}
          onChange={set('message')}
          placeholder="Programs, a demo, corporate training…"
        />
      </label>

      {failed && <p className="ibc-lead__error">{failed}</p>}

      <button type="submit" className="ibc-lead__submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send my details'}
      </button>
      <p className="ibc-lead__consent">{LEAD_FORM.consent}</p>
    </form>
  );
}

export default ChatLeadForm;
