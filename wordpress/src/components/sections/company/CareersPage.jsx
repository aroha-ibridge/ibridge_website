import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button, Container, Field, Input, Label, Section, Select, Textarea } from '../../ui';
import ProgramSectionHeader from '../shared/ProgramSectionHeader';
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
  'Other',
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
    `Tech stack: ${techStack}`,
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

function InterestForm({
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
          ? 'Please select at least one technology.'
          : selectedTech.includes('Other') && !otherTech
            ? 'Please name the other technology.'
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
              Which technology / tech stack do you have hands-on experience in?
              <RequiredMark />
            </legend>
            <div className="careers-tech-list">
              {TECH_OPTIONS.map((option, index) => (
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
                placeholder="Name the technology if you selected Other"
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

function RoleDialog({ job, onClose }) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="tw-scope careers-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="careers-dialog-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="careers-dialog__panel">
        <button type="button" className="careers-dialog__close" onClick={onClose} aria-label="Close role">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
          </svg>
        </button>
        <div className="careers-dialog__grid">
          <div className="careers-dialog__role">
            <p className="careers-role-card__dept">{job.department}</p>
            <h2 id="careers-dialog-title" className="careers-dialog__title">
              {job.title}
            </h2>
            <ul className="careers-role-card__meta">
              <li>{job.location}</li>
              <li>{job.workMode}</li>
              <li>{job.type}</li>
              <li>{job.experience}</li>
            </ul>
            <p className="careers-dialog__summary">{job.summary}</p>
            <h3 className="careers-dialog__heading">What you will do</h3>
            <ul className="careers-dialog__list">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="careers-dialog__heading">What we are looking for</h3>
            <ul className="careers-dialog__list">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <InterestForm
            key={job.id}
            roleTitle={job.title}
            department={job.department}
            workMode={`${job.location} · ${job.workMode}`}
            source="Careers page"
            eyebrow="Your interest"
            title={`Apply for ${job.title}`}
            subtitle="Share how to reach you. Our team reads every note sent from this page."
            submitLabel="Send interest"
            notePlaceholder="A few lines on your experience and why this role fits."
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CareersPage({ data }) {
  const { hero, whyJoin, hiring, roles, openApplication, equalOpportunity, contact, jobs } = data;
  const departments = useMemo(() => {
    const seen = [];
    jobs.forEach((job) => {
      if (!seen.includes(job.department)) seen.push(job.department);
    });
    return seen;
  }, [jobs]);

  const [department, setDepartment] = useState('All');
  const [query, setQuery] = useState('');
  const [activeJob, setActiveJob] = useState(null);

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, '');
      const match = jobs.find((job) => job.id === id) || null;
      setActiveJob(match);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (department !== 'All' && job.department !== department) return false;
      if (!needle) return true;
      const haystack = `${job.title} ${job.summary} ${job.department} ${job.location} ${job.workMode}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [jobs, department, query]);

  const openJob = useCallback((job) => {
    setActiveJob(job);
    const next = `${window.location.pathname}${window.location.search}#${job.id}`;
    window.history.replaceState(null, '', next);
  }, []);

  const closeJob = useCallback(() => {
    setActiveJob(null);
    const next = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, '', next);
  }, []);

  const departmentCounts = useMemo(() => {
    const counts = { All: jobs.length };
    jobs.forEach((job) => {
      counts[job.department] = (counts[job.department] || 0) + 1;
    });
    return counts;
  }, [jobs]);

  return (
    <div className="company-page company-about-page company-careers-page tw-scope">
      <Section spacing="compact" className="company-hero company-about-hero relative overflow-hidden">
        <div className="company-hero__glow" aria-hidden="true" />
        <div className="company-about-hero__orb company-about-hero__orb--a" aria-hidden="true" />
        <div className="company-about-hero__orb company-about-hero__orb--b" aria-hidden="true" />
        <Container className="relative company-about-hero__grid">
          <div className="company-about-hero__copy">
            <div className="company-eyebrow">{hero.eyebrow}</div>
            <h1 className="company-about-hero__title">
              {hero.title} <span className="text-brand">{hero.titleAccent}</span>
            </h1>
            <p className="company-about-hero__subtitle">{hero.subtitle}</p>
            <div className="company-about-hero__actions">
              <Button href="#open-roles" size="lg" className="!rounded-xl">
                View open roles
              </Button>
              <Button href="#how-we-hire" size="lg" variant="outline" className="!rounded-xl">
                How hiring works
              </Button>
            </div>
          </div>
          <div className="company-about-hero__media">
            <aside className="careers-hero-panel" aria-label="Hiring snapshot">
              <p className="careers-hero-panel__count">{jobs.length}</p>
              <p className="careers-hero-panel__label">open roles in Bengaluru</p>
              <ul className="careers-hero-panel__facts">
                <li>Full-time with iBridge360 Edtech Pvt. Ltd.</li>
                <li>Office in Jayanagar · hybrid on most roles</li>
                <li>Interest form uses the Contact Us enquiry desk</li>
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="tight" className="company-stats-band">
        <Container>
          <div className="company-stats careers-facts">
            <div className="company-stat">
              <div className="company-stat__value">{jobs.length}</div>
              <div className="company-stat__label">Open roles</div>
            </div>
            <div className="company-stat">
              <div className="company-stat__value">{departments.length}</div>
              <div className="company-stat__label">Teams hiring</div>
            </div>
            <div className="company-stat">
              <div className="company-stat__value careers-stat__place">Bengaluru</div>
              <div className="company-stat__label">Jayanagar office</div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <ProgramSectionHeader
            eyebrow={whyJoin.eyebrow}
            title={whyJoin.title}
            titleAccent={whyJoin.titleAccent}
            subtitle={whyJoin.subtitle}
            className="company-about-section-header"
          />
          <div className="company-feature-grid">
            {whyJoin.items.map((item, index) => (
              <article key={item.title} className="company-feature-card" style={{ '--about-delay': `${index * 60}ms` }}>
                <h3 className="company-feature-card__title">{item.title}</h3>
                <p className="company-feature-card__subtitle">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-we-hire" tone="soft" spacing="tight">
        <Container>
          <ProgramSectionHeader
            eyebrow={hiring.eyebrow}
            title={hiring.title}
            titleAccent={hiring.titleAccent}
            className="company-about-section-header"
          />
          <ol className="careers-steps">
            {hiring.steps.map((item) => (
              <li key={item.step} className="careers-step">
                <span className="careers-step__index">{item.step}</span>
                <h3 className="careers-step__title">{item.title}</h3>
                <p className="careers-step__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="open-roles" spacing="tight">
        <Container>
          <ProgramSectionHeader
            eyebrow={roles.eyebrow}
            title={roles.title}
            titleAccent={roles.titleAccent}
            subtitle={roles.subtitle}
            className="company-about-section-header"
          />
          <div className="careers-toolbar">
            <div className="careers-filters" role="group" aria-label="Filter by team">
              {['All', ...departments].map((item) => {
                const selected = department === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    className={`careers-filter${selected ? ' is-active' : ''}`}
                    onClick={() => setDepartment(item)}
                  >
                    {item}
                    <span className="careers-filter__count">{departmentCounts[item] || 0}</span>
                  </button>
                );
              })}
            </div>
            <label className="careers-search">
              <span className="sr-only">Search roles</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by role or skill"
              />
            </label>
          </div>

          {filteredJobs.length === 0 ? (
            <p className="careers-empty">
              No open role matches that filter. Try another team, or send an open application below.
            </p>
          ) : (
            <ul className="careers-role-list">
              {filteredJobs.map((job) => (
                <li key={job.id}>
                  <article className="careers-role-card">
                    <div className="careers-role-card__main">
                      <p className="careers-role-card__dept">{job.department}</p>
                      <h3 className="careers-role-card__title">
                        <button type="button" className="careers-role-card__open" onClick={() => openJob(job)}>
                          {job.title}
                        </button>
                      </h3>
                      <p className="careers-role-card__summary">{job.summary}</p>
                      <ul className="careers-role-card__meta">
                        <li>{job.location}</li>
                        <li>{job.workMode}</li>
                        <li>{job.type}</li>
                        <li>{job.experience}</li>
                      </ul>
                    </div>
                    <Button type="button" variant="outline" className="careers-role-card__cta !rounded-xl" onClick={() => openJob(job)}>
                      I&apos;m interested
                    </Button>
                  </article>
                </li>
              ))}
            </ul>
          )}
          <p className="careers-note">{equalOpportunity}</p>
        </Container>
      </Section>

      <Section id="open-application" tone="soft" spacing="tight">
        <Container>
          <div className="careers-open-layout">
            <ProgramSectionHeader
              align="left"
              eyebrow={openApplication.eyebrow}
              title={openApplication.title}
              titleAccent={openApplication.titleAccent}
              subtitle={openApplication.subtitle}
              className="!mb-0"
            />
            <InterestForm
              roleTitle="Open application"
              source="Careers page"
              showDepartment
              departments={departments}
              eyebrow="General interest"
              title="Tell us what you do"
              subtitle="If a matching role opens, we will write to the email you share."
              submitLabel="Send open application"
              notePlaceholder="The work you do, the teams you have been on, and what you want to do next."
            />
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="company-cta">
        <Container>
          <div className="company-cta__panel">
            <div className="company-cta__copy">
              <h2 className="company-cta__title">Questions before you apply?</h2>
              <p className="company-cta__text">
                Write to {contact.email} or call {contact.phone}. Office: {contact.address}.
              </p>
            </div>
            <div className="company-cta__actions">
              <Button
                href={contact.emailHref}
                size="lg"
                variant="secondary"
                className="!bg-white !text-brand hover:!bg-brand-50 !rounded-xl"
              >
                Email hiring
              </Button>
              <Button
                href={contact.phoneHref}
                size="lg"
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white/10 !rounded-xl"
              >
                Call us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {activeJob ? <RoleDialog job={activeJob} onClose={closeJob} /> : null}
    </div>
  );
}

export default CareersPage;
