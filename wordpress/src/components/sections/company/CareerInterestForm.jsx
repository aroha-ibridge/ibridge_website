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

const CLOUDINARY_CLOUD_NAME = 'qv3xjljc';
const CLOUDINARY_UPLOAD_PRESET = 'careers_resumes';
const RESUME_MAX_BYTES = 10 * 1024 * 1024;
const RESUME_EXTENSIONS = ['pdf', 'doc', 'docx'];

function resumeFilename(name, role, file) {
  const extension = file.name.split('.').pop()?.toLowerCase() || 'pdf';
  const safePart = (value, fallback) =>
    String(value || '')
      .normalize('NFKD')
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80) || fallback;
  return `${safePart(name, 'applicant')}-${safePart(role, 'open-role')}-resume.${extension}`;
}

async function uploadResume(file, applicantName, roleTitle) {
  const renamedFile = new File([file], resumeFilename(applicantName, roleTitle, file), {
    type: file.type,
    lastModified: file.lastModified,
  });
  const formData = new FormData();
  formData.append('file', renamedFile, renamedFile.name);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
    { method: 'POST', body: formData },
  );
  const data = await response.json().catch(() => null);
  if (!response.ok || !data?.secure_url) {
    throw new Error(data?.error?.message || 'Resume upload failed');
  }
  return data.secure_url;
}

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
    dateOfBirth ? `Date of birth: ${dateOfBirth}` : null,
    maritalStatus ? `Marital status: ${maritalStatus}` : null,
    experience ? `Total work experience: ${experience}` : null,
    currentCtc ? `Current CTC (₹ LPA): ${currentCtc}` : null,
    expectedCtc ? `Expected CTC (₹ LPA): ${expectedCtc}` : null,
    techStack ? `Skills / tools: ${techStack}` : null,
    relocate ? `Relocate to Bangalore: ${relocate}` : null,
    currentLocation ? `Current location: ${currentLocation}` : null,
    travel ? `Comfortable travelling: ${travel}` : null,
    noticePeriod ? `Notice period: ${noticePeriod}` : null,
    joiningDate ? `Earliest joining date: ${joiningDate}` : null,
    profileUrl ? `Profile: ${profileUrl}` : null,
    details.resumeUrl ? `Resume: ${details.resumeUrl}` : null,
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
  noteLabel = 'Why this role',
  showDepartment = false,
  departments = [],
  compact = false,
}) {
  const reactId = useId();
  const prefix = reactId.replace(/:/g, '');
  const field = (name) => `career-form-${name}-${prefix}`;
  const [submitting, setSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState('');
  const [otherSkills, setOtherSkills] = useState([]);
  const [otherSkillInput, setOtherSkillInput] = useState('');
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
    const resumeFile = data.get('resume');
    const note = data.get('note')?.toString().trim() || '';
    const chosenDepartment = showDepartment
      ? data.get('department')?.toString().trim() || 'General'
      : department;

    const nextErrors = {
      name: name ? '' : 'Please enter your full name.',
      phone: validatePhone(phone),
      email: validateEmail(email),
      note: note ? '' : 'Please add a short note.',
    };
    const extension = resumeFile?.name?.split('.').pop()?.toLowerCase() || '';
    nextErrors.resume =
      !resumeFile || typeof resumeFile === 'string' || !resumeFile.size
        ? 'Please upload your resume.'
        : !RESUME_EXTENSIONS.includes(extension)
          ? 'Upload a PDF, DOC, or DOCX file.'
          : resumeFile.size > RESUME_MAX_BYTES
            ? 'Resume must be 10 MB or smaller.'
            : '';
    if (!compact) {
      nextErrors.dateOfBirth = dateOfBirth ? '' : 'Please enter your date of birth.';
      nextErrors.maritalStatus = maritalStatus ? '' : 'Please select your marital status.';
      nextErrors.experience = experience ? '' : 'Please select your total work experience.';
      nextErrors.currentCtc = currentCtc ? '' : 'Please enter your current CTC.';
      nextErrors.expectedCtc = expectedCtc ? '' : 'Please enter your expected CTC.';
      nextErrors.techStack =
        selectedTech.length === 0
          ? 'Please select at least one skill.'
          : selectedTech.includes('Other') && !otherTech
            ? 'Please name the other skill.'
            : '';
      nextErrors.relocate = relocate ? '' : 'Please choose Yes or No.';
      nextErrors.currentLocation = currentLocation ? '' : 'Please enter your current location.';
      nextErrors.travel = travel ? '' : 'Please choose Yes or No.';
      nextErrors.noticePeriod = noticePeriod ? '' : 'Please select your notice period.';
    }
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
    let resumeUrl = '';
    try {
      resumeUrl = await uploadResume(resumeFile, name, roleTitle);
    } catch {
      setErrors((prev) => ({ ...prev, resume: 'Could not upload the resume. Please try again.' }));
      setSubmitting(false);
      form.querySelector(`#${CSS.escape(field('resume'))}`)?.focus();
      return;
    }
    application.resumeUrl = resumeUrl;
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
        resumeUrl,
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
        <div className="careers-form-grid">
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
          <Field className="careers-form-grid__full" error={errors.resume}>
            <Label htmlFor={field('resume')}>
              Resume
              <RequiredMark />
            </Label>
            <input
              id={field('resume')}
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              aria-invalid={Boolean(errors.resume)}
              className={`careers-resume-input${errors.resume ? ' careers-resume-input--invalid' : ''}`}
              onChange={(event) => {
                setResumeName(event.target.files?.[0]?.name || '');
                clearFieldError('resume');
              }}
            />
            <p className="careers-resume-hint">
              {resumeName ? `Selected: ${resumeName}` : 'PDF, DOC, or DOCX. Maximum 10 MB.'}
            </p>
          </Field>
          {!compact && (
            <>
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
              <fieldset className="careers-form-grid__full m-0 border-0 p-0">
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
                  <Label htmlFor={field('otherTechInput')}>Other</Label>
                  <div
                    className={`flex min-h-[52px] flex-wrap items-center gap-2 rounded-xl border bg-white px-3 py-2 focus-within:border-blue-700 focus-within:ring-2 focus-within:ring-blue-700/15${errors.techStack?.includes('other') ? ` ${INVALID_CLASS}` : ' border-gray-400'}`}
                  >
                    {otherSkills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900"
                      >
                        {skill}
                        <button
                          type="button"
                          className="rounded-full p-0.5 text-blue-700 hover:bg-blue-100"
                          aria-label={`Remove ${skill}`}
                          onClick={() => {
                            setOtherSkills((current) => current.filter((item) => item !== skill));
                            clearFieldError('techStack');
                          }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <input
                      id={field('otherTechInput')}
                      type="text"
                      value={otherSkillInput}
                      placeholder={otherSkills.length ? 'Add another skill' : 'Type a skill and press Enter'}
                      className="min-w-[180px] flex-1 border-0 bg-transparent px-1 py-1 text-base text-ink outline-none placeholder:text-slate-400"
                      onChange={(event) => {
                        setOtherSkillInput(event.target.value);
                        clearFieldError('techStack');
                      }}
                      onKeyDown={(event) => {
                        if (event.key !== 'Enter') return;
                        event.preventDefault();
                        const skill = otherSkillInput.trim();
                        if (!skill || otherSkills.includes(skill)) return;
                        setOtherSkills((current) => [...current, skill]);
                        setOtherSkillInput('');
                        clearFieldError('techStack');
                      }}
                    />
                    <input type="hidden" name="otherTech" value={otherSkills.join(', ')} readOnly />
                  </div>
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
              <Field className="careers-form-grid__full" error={errors.travel}>
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
            </>
          )}
          {showDepartment && (
            <Field className="careers-form-grid__full">
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
          <Field>
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
          <Field className="careers-form-grid__full" error={errors.note}>
            <Label htmlFor={field('note')}>
              {noteLabel}
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
            This goes to the same iBridge360 enquiry desk as Contact Us. We reply to the email you enter.
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
