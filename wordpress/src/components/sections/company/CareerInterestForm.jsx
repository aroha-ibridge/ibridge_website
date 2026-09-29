import { useId, useState } from 'react';

import { Button, Field, Input, Label, Select, Textarea } from '../../ui';
import { submitEnquiry } from '../../../utils/enquiryFormSubmit';
import { validateEmail, validatePhone } from '../../../utils/formValidation';
import '../../../styles/company-pages.css';
import '../../../styles/careers-page.css';

const FIELD_CLASS =
  '!rounded-xl !border !border-gray-400 !bg-white hover:!border-gray-400 focus:!border-blue-700 focus:!ring-blue-700/15';
const INVALID_CLASS = '!border-red-500 focus:!border-red-600 focus:!ring-red-500/15';

function RequiredMark() {
  return (
    <span className="text-red-600" aria-hidden="true">
      {' '}
      *
    </span>
  );
}

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

const EXPERIENCE_OPTIONS = [
  'Fresher',
  'Less than 1 year',
  '1–2 years',
  '2–3 years',
  '3–5 years',
  '5–7 years',
  '10+ years',
];

const MARITAL_OPTIONS = ['Single', 'Married', 'Prefer not to say'];

const NOTICE_OPTIONS = [
  'No',
  'Yes, less than 15 days',
  'Yes, 15 - 30 days',
  'Yes, 30 - 60 days',
  'Yes, 60days+',
];

const TECH_OPTIONS = [
  'SQL',
  'Python',
  'Java',
  'ETL / ELT',
  'Data Warehousing',
  'Apache Spark / PySpark',
  'AWS / Cloud',
  'Microsoft Azure',
  'Power BI',
  'Data Analytics & Visualization',
  'Pandas / NumPy',
  'Statistics & Excel',
  'AI / Machine Learning',
  'Generative AI / LLMs',
  'JavaScript',
  'React.js',
  'Node.js',
  'MERN / Full Stack Development',
  'Spring Boot',
];

async function saveCareersApplication(fields) {
  const response = await fetch('/api/careers-sheet', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(fields),
  });
  if (!response.ok) {
    throw new Error('Careers sheet save failed');
  }
}

function buildInterestMessage(details) {
  const {
    roleTitle,
    department,
    workMode,
    experience,
    profileUrl,
    note,
    dateOfBirth,
    maritalStatus,
    currentCtc,
    expectedCtc,
    techStack,
    relocate,
    currentLocation,
    travel,
    noticePeriod,
    joiningDate,
  } = details;

  return [
    `Role: ${roleTitle}`,
    department ? `Department: ${department}` : null,
    workMode ? `Work mode: ${workMode}` : null,
    `Date of birth: ${dateOfBirth}`,
    `Marital status: ${maritalStatus}`,
    `Total work experience: ${experience}`,
    `Current CTC (₹ LPA): ${currentCtc}`,
    `Expected CTC (₹ LPA): ${expectedCtc}`,
    `Skills / tools: ${techStack}`,
    `Relocate to Bangalore: ${relocate}`,
    `Current location: ${currentLocation}`,
    `Comfortable travelling: ${travel}`,
    `Notice period: ${noticePeriod}`,
    joiningDate ? `Earliest joining date: ${joiningDate}` : null,
    profileUrl ? `Profile: ${profileUrl}` : null,
    '',
    `Note: ${note}`,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export function InterestForm({
  techOptions = TECH_OPTIONS,
  roleTitle,
  department = '',
  workMode = '',
  source,
  eyebrow,
  title,
  subtitle,
  submitLabel,
  notePlaceholder,
  showDepartment = false,
  departments = [],
}) {
  const reactId = useId();
  const prefix = reactId.replace(/:/g, '');
  const field = (name) => `career-form-${name}-${prefix}`;
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const clearFieldError = (key) => {
    setErrors((prev) => (prev[key] ? { ...prev, [key]: '' } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const dateOfBirth = data.get('dateOfBirth')?.toString().trim() || '';
    const maritalStatus = data.get('maritalStatus')?.toString().trim() || '';
    const experience = data.get('experience')?.toString().trim() || '';
    const currentCtc = data.get('currentCtc')?.toString().trim() || '';
    const expectedCtc = data.get('expectedCtc')?.toString().trim() || '';
    const selectedTech = data.getAll('techStack').map((item) => item.toString().trim()).filter(Boolean);
    const otherTech = data.get('otherTech')?.toString().trim() || '';
    const techStack = selectedTech
      .map((item) => (item === 'Other' && otherTech ? `Other: ${otherTech}` : item))
      .filter((item) => item !== 'Other')
      .join(', ');
    const relocate = data.get('relocate')?.toString().trim() || '';
    const currentLocation = data.get('currentLocation')?.toString().trim() || '';
    const travel = data.get('travel')?.toString().trim() || '';
    const noticePeriod = data.get('noticePeriod')?.toString().trim() || '';
    const joiningDate = data.get('joiningDate')?.toString().trim() || '';
    const profileUrl = data.get('profileUrl')?.toString().trim() || '';
    const note = data.get('note')?.toString().trim() || '';
    const chosenDepartment = showDepartment
      ? data.get('department')?.toString().trim() || 'General'
      : department;

    const nextErrors = {
      name: name ? '' : 'Please enter your full name.',
      phone: validatePhone(phone),
      email: validateEmail(email),
      dateOfBirth: dateOfBirth ? '' : 'Please enter your date of birth.',
      maritalStatus: maritalStatus ? '' : 'Please select your marital status.',
      experience: experience ? '' : 'Please select your total work experience.',
      currentCtc: currentCtc ? '' : 'Please enter your current CTC.',
      expectedCtc: expectedCtc ? '' : 'Please enter your expected CTC.',
      techStack:
        selectedTech.length === 0
          ? 'Please select at least one skill.'
          : selectedTech.includes('Other') && !otherTech
            ? 'Please name the other skill.'
            : '',
      relocate: relocate ? '' : 'Please choose Yes or No.',
      currentLocation: currentLocation ? '' : 'Please enter your current location.',
      travel: travel ? '' : 'Please choose Yes or No.',
      noticePeriod: noticePeriod ? '' : 'Please select your notice period.',
      note: note ? '' : 'Please add a short note.',
    };
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors).find((key) => nextErrors[key]);
    if (firstInvalid) {
      const target =
        firstInvalid === 'techStack' && selectedTech.includes('Other') && !otherTech
          ? field('otherTech')
          : field(firstInvalid);
      form.querySelector(`#${CSS.escape(target)}`)?.focus();
      return;
    }

    const application = {
      name,
      email,
      phone,
      role: roleTitle,
      department: chosenDepartment,
      workMode,
      dateOfBirth,
      maritalStatus,
      experience,
      currentCtc,
      expectedCtc,
      techStack,
      relocate,
      currentLocation,
      travel,
      noticePeriod,
      joiningDate,
      profileUrl,
      note,
      pageUrl: window.location.href,
    };

    setSubmitting(true);
    await submitEnquiry({
      name,
      phone,
      email,
      courseName: roleTitle,
      learnerType: `Job applicant — ${chosenDepartment || 'General'}`,
      message: buildInterestMessage({
        roleTitle,
        department: chosenDepartment,
        workMode,
        experience,
        profileUrl,
        note,
        dateOfBirth,
        maritalStatus,
        currentCtc,
        expectedCtc,
        techStack,
        relocate,
        currentLocation,
        travel,
        noticePeriod,
        joiningDate,
      }),
      source,
      messageContainer: form,
      beforeRedirect: () => saveCareersApplication(application),
    });
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="company-contact-form careers-interest-form" noValidate>
      <div className="company-contact-form__header">
        <span className="company-contact-form__eyebrow">{eyebrow}</span>
        <h2 className="company-contact-form__title">{title}</h2>
        <p className="company-contact-form__subtitle">{subtitle}</p>
      </div>
      <div className="company-contact-form__body">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field error={errors.name}>
            <Label htmlFor={field('name')}>
              Full name
              <RequiredMark />
            </Label>
            <Input
              id={field('name')}
              name="name"
              placeholder="Your full name"
              required
              aria-invalid={Boolean(errors.name)}
              className={`${FIELD_CLASS}${errors.name ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('name')}
            />
          </Field>
          <Field error={errors.email}>
            <Label htmlFor={field('email')}>
              Email address
              <RequiredMark />
            </Label>
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
            <Label htmlFor={field('phone')}>
              Phone number
              <RequiredMark />
            </Label>
            <Input
              id={field('phone')}
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="9876543210"
              required
              aria-invalid={Boolean(errors.phone)}
              className={`${FIELD_CLASS}${errors.phone ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('phone')}
            />
          </Field>
          <Field error={errors.dateOfBirth}>
            <Label htmlFor={field('dateOfBirth')}>
              Date of birth
              <RequiredMark />
            </Label>
            <Input
              id={field('dateOfBirth')}
              name="dateOfBirth"
              type="date"
              required
              max={todayIso()}
              aria-invalid={Boolean(errors.dateOfBirth)}
              className={`${FIELD_CLASS}${errors.dateOfBirth ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('dateOfBirth')}
            />
          </Field>
          <Field error={errors.maritalStatus}>
            <Label htmlFor={field('maritalStatus')}>
              Marital status
              <RequiredMark />
            </Label>
            <Select
              id={field('maritalStatus')}
              name="maritalStatus"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.maritalStatus)}
              className={`${FIELD_CLASS}${errors.maritalStatus ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('maritalStatus')}
            >
              <option value="">Select</option>
              {MARITAL_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field error={errors.experience}>
            <Label htmlFor={field('experience')}>
              Total work experience
              <RequiredMark />
            </Label>
            <Select
              id={field('experience')}
              name="experience"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.experience)}
              className={`${FIELD_CLASS}${errors.experience ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('experience')}
            >
              <option value="">Select a range</option>
              {EXPERIENCE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field error={errors.currentCtc}>
            <Label htmlFor={field('currentCtc')}>
              Current CTC (₹ LPA)
              <RequiredMark />
            </Label>
            <Input
              id={field('currentCtc')}
              name="currentCtc"
              inputMode="decimal"
              placeholder="e.g. 6"
              required
              aria-invalid={Boolean(errors.currentCtc)}
              className={`${FIELD_CLASS}${errors.currentCtc ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('currentCtc')}
            />
          </Field>
          <Field error={errors.expectedCtc}>
            <Label htmlFor={field('expectedCtc')}>
              Expected CTC (₹ LPA)
              <RequiredMark />
            </Label>
            <Input
              id={field('expectedCtc')}
              name="expectedCtc"
              inputMode="decimal"
              placeholder="e.g. 8"
              required
              aria-invalid={Boolean(errors.expectedCtc)}
              className={`${FIELD_CLASS}${errors.expectedCtc ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('expectedCtc')}
            />
          </Field>
          <fieldset className="sm:col-span-2 m-0 border-0 p-0">
            <legend className="tw-scope mb-2 block text-sm font-semibold text-ink">
              Which skills / tools do you have hands-on experience in?
              <RequiredMark />
            </legend>
            <div className="careers-tech-list">
              {[...techOptions, 'Other'].map((option, index) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    name="techStack"
                    value={option}
                    id={index === 0 ? field('techStack') : undefined}
                    onChange={() => clearFieldError('techStack')}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {errors.techStack ? <p className="mt-1.5 text-xs text-red-600">{errors.techStack}</p> : null}
            <div className="mt-3">
              <Label htmlFor={field('otherTech')}>Other</Label>
              <Input
                id={field('otherTech')}
                name="otherTech"
                placeholder="Name the skill if you selected Other"
                aria-invalid={Boolean(errors.techStack && errors.techStack.includes('other'))}
                className={`${FIELD_CLASS}${errors.techStack?.includes('other') ? ` ${INVALID_CLASS}` : ''}`}
                onChange={() => clearFieldError('techStack')}
              />
            </div>
          </fieldset>
          <Field error={errors.relocate}>
            <Label htmlFor={field('relocate')}>
              Are you comfortable relocating to Bangalore?
              <RequiredMark />
            </Label>
            <Select
              id={field('relocate')}
              name="relocate"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.relocate)}
              className={`${FIELD_CLASS}${errors.relocate ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('relocate')}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </Field>
          <Field error={errors.currentLocation}>
            <Label htmlFor={field('currentLocation')}>
              Current location
              <RequiredMark />
            </Label>
            <Input
              id={field('currentLocation')}
              name="currentLocation"
              placeholder="City"
              required
              aria-invalid={Boolean(errors.currentLocation)}
              className={`${FIELD_CLASS}${errors.currentLocation ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('currentLocation')}
            />
          </Field>
          <Field className="sm:col-span-2" error={errors.travel}>
            <Label htmlFor={field('travel')}>
              Are you comfortable travelling to different client/college locations for training and work requirements?
              <RequiredMark />
            </Label>
            <Select
              id={field('travel')}
              name="travel"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.travel)}
              className={`${FIELD_CLASS}${errors.travel ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('travel')}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </Field>
          <Field error={errors.noticePeriod}>
            <Label htmlFor={field('noticePeriod')}>
              Are you currently serving a notice period?
              <RequiredMark />
            </Label>
            <Select
              id={field('noticePeriod')}
              name="noticePeriod"
              defaultValue=""
              required
              aria-invalid={Boolean(errors.noticePeriod)}
              className={`${FIELD_CLASS}${errors.noticePeriod ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('noticePeriod')}
            >
              <option value="">Select</option>
              {NOTICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Field>
          <Field>
            <Label htmlFor={field('joiningDate')}>Earliest joining date</Label>
            <Input
              id={field('joiningDate')}
              name="joiningDate"
              type="date"
              min={todayIso()}
              className={FIELD_CLASS}
            />
          </Field>
          {showDepartment && (
            <Field className="sm:col-span-2">
              <Label htmlFor={field('department')}>Team you want to join</Label>
              <Select id={field('department')} name="department" defaultValue="General" className={FIELD_CLASS}>
                <option value="General">Not sure yet</option>
                {departments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Field>
          )}
          <Field className="sm:col-span-2">
            <Label htmlFor={field('profileUrl')}>LinkedIn or portfolio</Label>
            <Input
              id={field('profileUrl')}
              name="profileUrl"
              type="url"
              inputMode="url"
              placeholder="https://"
              className={FIELD_CLASS}
            />
          </Field>
          <Field className="sm:col-span-2" error={errors.note}>
            <Label htmlFor={field('note')}>
              Why this role
              <RequiredMark />
            </Label>
            <Textarea
              id={field('note')}
              name="note"
              rows={4}
              placeholder={notePlaceholder}
              required
              aria-invalid={Boolean(errors.note)}
              className={`${FIELD_CLASS}${errors.note ? ` ${INVALID_CLASS}` : ''}`}
              onChange={() => clearFieldError('note')}
            />
          </Field>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted leading-relaxed max-w-sm">
            This goes to the same iBridge360 enquiry desk as Contact Us. We reply to the email you enter. Add a résumé link above if you have one.
          </p>
          <Button type="submit" size="lg" disabled={submitting} className="!rounded-xl shrink-0 w-full sm:w-auto">
            {submitting ? 'Sending…' : submitLabel}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default InterestForm;
