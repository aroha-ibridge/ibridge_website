import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  PROGRAM_OPTIONS,
  consumePendingProgramName,
  getCurrentProgramName,
  getEnquiryPageDefaults,
  getProgramNameFromQuery,
  getProgramPriceFromQuery,
  isOnProgramPage,
} from '../../utils/programContext';
import { submitEnquiryFormElementor } from '../../utils/enquiryFormSubmit';
import { validateEmail, validatePhone } from '../../utils/formValidation';

function resolveDefaultCourse(override = '', path = '') {
  return (
    override ||
    consumePendingProgramName() ||
    getProgramNameFromQuery() ||
    getEnquiryPageDefaults(path)?.courseName ||
    getCurrentProgramName(path) ||
    ''
  );
}

function buildCourseOptions(selectedCourse) {
  const names = new Set(PROGRAM_OPTIONS.map((program) => program.name));
  const extra =
    selectedCourse && !names.has(selectedCourse) && selectedCourse !== 'Other'
      ? [{ name: selectedCourse }]
      : [];
  return [...extra, ...PROGRAM_OPTIONS];
}

/**
 * Reusable "Let's Get You Enrolled" form.
 *
 * Rules:
 * - On dedicated program pages (or when a course is pre-selected / brochure requested),
 *   exclude the Course dropdown completely and submit the selected course in the background.
 * - On general pages (e.g. homepage, about us) where no course is active, show the Course dropdown.
 */
function EnquiryForm({
  title = "Let's Get You Enrolled",
  source = 'Enroll form',
  defaultCourse = '',
  hideCourse = false,
  idPrefix,
  className = '',
}) {
  const reactId = useId();
  const prefix = (idPrefix || reactId).replace(/:/g, '');
  const formRef = useRef(null);
  const { pathname, search } = useLocation();

  const pageDefaults = getEnquiryPageDefaults(pathname);
  const currentProgram = getCurrentProgramName(pathname);
  const fixedCourse = defaultCourse || pageDefaults?.courseName || currentProgram || '';

  const [course, setCourse] = useState(() => resolveDefaultCourse(fixedCourse, pathname));
  const [coursePrice, setCoursePrice] = useState(() => getProgramPriceFromQuery());
  const [submitSource, setSubmitSource] = useState(source);
  const [isBrochure, setIsBrochure] = useState(false);
  const [courseLocked, setCourseLocked] = useState(() =>
    Boolean(fixedCourse || isOnProgramPage(pathname)),
  );

  const courseOptions = useMemo(() => buildCourseOptions(course), [course]);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({ phone: '', email: '' });

  // Update when pathname, search query, or fixed course prop changes
  useEffect(() => {
    const nextFixed =
      defaultCourse ||
      getEnquiryPageDefaults(pathname)?.courseName ||
      getCurrentProgramName(pathname) ||
      '';
    const resolved = resolveDefaultCourse(nextFixed, pathname);
    if (resolved) {
      setCourse(resolved);
    }
    setCoursePrice(getProgramPriceFromQuery());
    setSubmitSource(source);
    if (nextFixed || isOnProgramPage(pathname)) {
      setCourseLocked(true);
    }
  }, [defaultCourse, pathname, search, source]);

  // Handle popup events (e.g. opening popup with a specific course or brochure)
  useEffect(() => {
    const onPopupOpen = (event) => {
      const eventCourse = event.detail?.courseName;
      const nextCourse = eventCourse || resolveDefaultCourse(fixedCourse, pathname);
      if (nextCourse) {
        setCourse(nextCourse);
        setCourseLocked(true);
      }
      if (event.detail?.coursePrice) setCoursePrice(event.detail.coursePrice);
      if (event.detail?.source) setSubmitSource(event.detail.source);
      setIsBrochure(
        Boolean(
          event.detail?.isBrochure ||
            event.detail?.source?.toLowerCase().includes('brochure'),
        ),
      );
    };

    window.addEventListener('enquire-popup-opened', onPopupOpen);
    return () => window.removeEventListener('enquire-popup-opened', onPopupOpen);
  }, [fixedCourse, pathname, source]);

  // Determine whether to exclude/hide the course select dropdown.
  // Excluded on dedicated program pages, or when course is locked / brochure / prop hideCourse.
  const isDedicated = isOnProgramPage(pathname) || Boolean(fixedCourse) || Boolean(currentProgram);
  const shouldHideCourse =
    hideCourse ||
    Boolean(pageDefaults?.hideCourse) ||
    isDedicated ||
    isBrochure ||
    (Boolean(course) && courseLocked);

  const field = (name) => `ibridge-enquiry-${name}-${prefix}`;

  const clearFieldError = (key) => {
    setErrors((prev) => (prev[key] ? { ...prev, [key]: '' } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inPopup = Boolean(form.closest('.enquire-popup'));
    if (!inPopup) {
      const phone = form.querySelector('[name="form_fields[message]"][type="tel"]')?.value || '';
      const email = form.querySelector('[name="form_fields[email]"]')?.value || '';

      const nextErrors = {
        phone: validatePhone(phone),
        email: validateEmail(email),
      };
      setErrors(nextErrors);

      if (nextErrors.phone || nextErrors.email) {
        const firstInvalid = nextErrors.phone
          ? form.querySelector('[name="form_fields[message]"][type="tel"]')
          : form.querySelector('[name="form_fields[email]"]');
        firstInvalid?.focus();
        return;
      }
    }

    setSubmitting(true);
    const result = await submitEnquiryFormElementor(event, { source: submitSource });
    if (result?.reset) {
      setCourse(resolveDefaultCourse(fixedCourse, pathname));
      setCoursePrice(getProgramPriceFromQuery());
      setSubmitSource(source);
      setErrors({ phone: '', email: '' });
    }
    setSubmitting(false);
  };

  const displayCourse = course || currentProgram || fixedCourse;

  return (
    <div className={`ibridge-enquiry-form ${className}`.trim()}>
      <div className="ibridge-enquiry-form__header">
        <h2 className="ibridge-enquiry-form__title">
          {isBrochure ? 'Download Course Brochure' : title}
        </h2>
        {isBrochure ? (
          <p className="ibridge-enquiry-form__subtitle text-xs text-white/80 mt-1 mb-0">
            {displayCourse ? <strong className="text-white">{displayCourse} — </strong> : null}
            Enter your details below to download the complete curriculum brochure.
          </p>
        ) : shouldHideCourse && displayCourse && !displayCourse.startsWith('Request Demo') ? (
          <p className="ibridge-enquiry-form__subtitle text-xs text-white/90 mt-1 mb-0 font-medium">
            Program: <span className="font-semibold text-white">{displayCourse}</span>
          </p>
        ) : null}
      </div>

      <form
        ref={formRef}
        className="ibridge-enquiry-form__body"
        method="post"
        name="Program Enquiry"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="ibridge-enquiry-form__fields">
          <div className="ibridge-enquiry-form__field">
            <label htmlFor={field('name')} className="ibridge-enquiry-form__label">
              Full Name
            </label>
            <input
              id={field('name')}
              name="form_fields[name]"
              type="text"
              className="ibridge-enquiry-form__input"
              placeholder="Name"
              autoComplete="name"
              required
            />
          </div>

          <div className="ibridge-enquiry-form__field">
            <label htmlFor={field('phone')} className="ibridge-enquiry-form__label">
              Mobile Number
            </label>
            <input
              id={field('phone')}
              name="form_fields[message]"
              type="tel"
              inputMode="tel"
              className={`ibridge-enquiry-form__input${errors.phone ? ' is-invalid' : ''}`}
              placeholder="9876543210 or +91 9876543210"
              autoComplete="tel"
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? field('phone-error') : undefined}
              onChange={() => clearFieldError('phone')}
            />
            {errors.phone ? (
              <p id={field('phone-error')} className="ibridge-enquiry-form__error" role="alert">
                {errors.phone}
              </p>
            ) : null}
          </div>

          <div className="ibridge-enquiry-form__field">
            <label htmlFor={field('email')} className="ibridge-enquiry-form__label">
              Email
            </label>
            <input
              id={field('email')}
              name="form_fields[email]"
              type="email"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              className={`ibridge-enquiry-form__input${errors.email ? ' is-invalid' : ''}`}
              placeholder="name@example.com"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? field('email-error') : undefined}
              onChange={() => clearFieldError('email')}
            />
            {errors.email ? (
              <p id={field('email-error')} className="ibridge-enquiry-form__error" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>

          {shouldHideCourse ? (
            <input
              type="hidden"
              name="form_fields[course]"
              value={displayCourse || 'Master Data Engineering Program'}
              data-default-course={displayCourse || 'Master Data Engineering Program'}
              readOnly
            />
          ) : (
            <div className="ibridge-enquiry-form__field">
              <label htmlFor={field('course')} className="ibridge-enquiry-form__label">
                Course
              </label>
              <select
                id={field('course')}
                name="form_fields[course]"
                className="ibridge-enquiry-form__select"
                required
                value={course}
                data-default-course={course || undefined}
                onChange={(event) => setCourse(event.target.value)}
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courseOptions.map((program) => (
                  <option key={program.name} value={program.name}>
                    {program.name}
                  </option>
                ))}
                <option value="Other">Other / Not sure yet</option>
              </select>
            </div>
          )}

          <input type="hidden" name="form_fields[coursePrice]" value={coursePrice} readOnly />
          <input type="hidden" name="form_fields[enquirySource]" value={submitSource} readOnly />

          <button type="submit" className="ibridge-enquiry-form__submit" disabled={submitting}>
            {submitting
              ? 'Preparing download…'
              : isBrochure
                ? 'Download Brochure'
                : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
