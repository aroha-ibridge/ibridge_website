import { useId, useRef, useState } from 'react';

import { Button, Field, Input, Label, Select, Textarea } from '../../ui';
import { submitEnquiry, showFormMessage } from '../../../utils/enquiryFormSubmit';

const DEFAULT_ORG_SIZES = ['1–50', '51–200', '201–500', '501–1000', '1000+'];
const DEFAULT_MODES = ['Online Live', 'Offline Classroom', 'Hybrid', 'Weekend Batch', 'Bootcamp', 'Executive Workshop'];
const DEFAULT_TIMELINES = ['Immediate', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible'];
const FORM_FIELD_CLASS =
  'border-solid border-gray-400 bg-white hover:border-gray-400 focus:border-blue-700 focus:ring-blue-700/15';

function AudienceLeadForm({ formConfig = {}, className = '' }) {
  const {
    variant = 'full',
    learnerType = 'Corporate',
    source = 'Consultation Form',
    organizationLabel = 'Company Name',
    contactLabel = 'Contact Person',
    emailLabel = 'Work Email',
    requirementLabel = 'Training Requirement',
    requirementPlaceholder = 'Tell us what you are looking for',
    submitLabel = 'Get My Training Plan',
    successMessage = 'Thank you! Our team will get back to you shortly.',
    technologyOptions = [],
    showOrgSize = true,
    showMode = true,
    showTimeline = true,
    showTechnology = true,
    showRequirement = true,
    programOptions = [],
  } = formConfig;

  const reactId = useId();
  const prefix = reactId.replace(/:/g, '');
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const field = (name) => `audience-form-${name}-${prefix}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const organization = data.get('organization')?.toString().trim() || '';
    const contact = data.get('contact')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const orgSize = data.get('orgSize')?.toString() || '';
    const requirement = data.get('requirement')?.toString() || '';
    const technology = data.get('technology')?.toString() || '';
    const program = data.get('program')?.toString() || '';
    const mode = data.get('mode')?.toString() || '';
    const timeline = data.get('timeline')?.toString() || '';
    const message = data.get('message')?.toString().trim() || '';

    const name = variant === 'simple' ? contact : contact;
    const details = [
      organization && `${organizationLabel}: ${organization}`,
      orgSize && `Organization Size: ${orgSize}`,
      requirement && `${requirementLabel}: ${requirement}`,
      program && `Program Interest: ${program}`,
      technology && `Preferred Technology: ${technology}`,
      mode && `Preferred Mode: ${mode}`,
      timeline && `Preferred Timeline: ${timeline}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join('\n');

    const result = await submitEnquiry({
      name,
      phone,
      email,
      courseName: program || technology || learnerType,
      learnerType,
      message: details,
      source,
      messageContainer: form,
    });

    if (result.success) {
      form.reset();
      if (!result.redirected) {
        showFormMessage(form, successMessage, 'success');
      }
    }

    setSubmitting(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`audience-landing-form rounded-[28px] border border-brand/10 bg-white p-6 md:p-8 shadow-card ${className}`.trim()}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {variant === 'full' && organizationLabel && (
          <Field>
            <Label htmlFor={field('organization')}>{organizationLabel}</Label>
            <Input id={field('organization')} name="organization" placeholder={organizationLabel} required className={FORM_FIELD_CLASS} />
          </Field>
        )}
        <Field className={variant === 'simple' ? 'sm:col-span-2' : ''}>
          <Label htmlFor={field('contact')}>{variant === 'simple' ? 'Full Name' : contactLabel}</Label>
          <Input id={field('contact')} name="contact" placeholder="Full name" required className={FORM_FIELD_CLASS} />
        </Field>
        <Field>
          <Label htmlFor={field('email')}>{emailLabel}</Label>
          <Input
            id={field('email')}
            name="email"
            type="email"
            placeholder={emailLabel.includes('Work') ? 'name@company.com' : 'you@email.com'}
            required
            className={FORM_FIELD_CLASS}
          />
        </Field>
        <Field>
          <Label htmlFor={field('phone')}>Phone Number</Label>
          <Input id={field('phone')} name="phone" type="tel" placeholder="+91" required className={FORM_FIELD_CLASS} />
        </Field>

        {variant === 'simple' && programOptions.length > 0 && (
          <Field className="sm:col-span-2">
            <Label htmlFor={field('program')}>Program Interest</Label>
            <Select id={field('program')} name="program" required defaultValue="" className={FORM_FIELD_CLASS}>
              <option value="" disabled>
                Select a program
              </option>
              {programOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
        )}

        {variant === 'full' && showOrgSize && (
          <Field>
            <Label htmlFor={field('orgSize')}>Organization Size</Label>
            <Select id={field('orgSize')} name="orgSize" required defaultValue="" className={FORM_FIELD_CLASS}>
              <option value="" disabled>
                Select size
              </option>
              {DEFAULT_ORG_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Field>
        )}

        {variant === 'full' && showTechnology && technologyOptions.length > 0 && (
          <Field>
            <Label htmlFor={field('technology')}>Preferred Technology</Label>
            <Select id={field('technology')} name="technology" required defaultValue="" className={FORM_FIELD_CLASS}>
              <option value="" disabled>
                Select technology
              </option>
              {technologyOptions.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </Select>
          </Field>
        )}

        {variant === 'full' && showMode && (
          <Field>
            <Label htmlFor={field('mode')}>Preferred Mode</Label>
            <Select id={field('mode')} name="mode" required defaultValue="" className={FORM_FIELD_CLASS}>
              <option value="" disabled>
                Select mode
              </option>
              {DEFAULT_MODES.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </Select>
          </Field>
        )}

        {variant === 'full' && showTimeline && (
          <Field>
            <Label htmlFor={field('timeline')}>Preferred Timeline</Label>
            <Select id={field('timeline')} name="timeline" required defaultValue="" className={FORM_FIELD_CLASS}>
              <option value="" disabled>
                Select timeline
              </option>
              {DEFAULT_TIMELINES.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </Select>
          </Field>
        )}

        {variant === 'full' && showRequirement && (
          <Field className="sm:col-span-2">
            <Label htmlFor={field('requirement')}>{requirementLabel}</Label>
            <Input
              id={field('requirement')}
              name="requirement"
              placeholder={requirementPlaceholder}
              required
              className={FORM_FIELD_CLASS}
            />
          </Field>
        )}

        <Field className="sm:col-span-2">
          <Label htmlFor={field('message')}>Message</Label>
          <Textarea
            id={field('message')}
            name="message"
            rows={4}
            placeholder="Share any additional details or questions"
            className={FORM_FIELD_CLASS}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? 'Submitting…' : submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default AudienceLeadForm;
