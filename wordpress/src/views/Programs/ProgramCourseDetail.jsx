import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../../styles/program-course-detail.css';
import '../../styles/rating-stars.css';
import {
  formatProgramPrice,
  getProgramDetailPath,
  getProgramDetailDisplayName,
  getProgramDetailHoursLabel,
  getProgramDetailLead,
  getProgramDetailLevelName,
  getProgramDetailLevelTag,
  getProgramFaqs,
  getProgramFullDescription,
  getProgramLevelLabel,
  getProgramRating,
  getProgramRequirements,
  getProgramSyllabusGroups,
  getProgramTotalHoursLabel,
  getProgramCategoryId,
} from '../../components/sections/programs/trendingSkillsUtils';
import { RatingStars } from '../../components/sections/programs/RatingStars';
import { isShownOnProgramsPage } from '@/utils/programVisibility';
import { isHtmlCssProgram } from '../../content/programs/htmlCssCourseContent';
import { isJavaFullStackProgram } from '../../content/programs/javaFullStackCourseContent';
import { openEnquirePopupWithCourse } from '../../utils/programContext';
import { learnerApiUrl } from '../../constants/apiOrigins';

function EnrollNowButton({ courseName, coursePrice, className, children = 'Enroll Now' }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => openEnquirePopupWithCourse(courseName, coursePrice)}
    >
      {children}
    </button>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5M9 13h6M9 17h6" strokeLinecap="round" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
    </svg>
  );
}

function LevelsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 18h16M7 14h10M10 10h4M12 6v0" strokeLinecap="round" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z" />
    </svg>
  );
}

const SECTIONS = [
  { id: 'overview', label: 'Course Overview' },
  { id: 'syllabus', label: 'Syllabus' },
  { id: 'requirements', label: 'Course Requirements' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'related', label: 'Recommended course' },
  { id: 'faq', label: 'FAQ' },
];

function getOriginalPrice(price) {
  const num = Number(price);
  if (!Number.isFinite(num) || num <= 0) return null;
  const original = Math.round(num / 0.75 / 100) * 100;
  return original > num ? original : Math.round(num * 1.35);
}

function getDiscountPercent(price, original) {
  if (!price || !original || original <= price) return null;
  return Math.round(((original - price) / original) * 100);
}

function ProgramCourseDetail({ programId: programIdProp } = {}) {
  const params = useParams();
  const programId = programIdProp || params.programId;
  const [program, setProgram] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(0);
  const [openModule, setOpenModule] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!programId) return;
      setLoading(true);
      setError('');
      try {
        const [infoRes, listRes] = await Promise.all([
          fetch(learnerApiUrl(`/api/programs/getProgramInfo/${programId}`), {
            headers: { Accept: 'application/json' },
            cache: 'no-store',
          }),
          fetch(learnerApiUrl('/api/programs/getPrograms'), {
            headers: { Accept: 'application/json' },
            cache: 'no-store',
          }),
        ]);

        const infoJson = await infoRes.json().catch(() => null);
        const listJson = await listRes.json().catch(() => null);

        if (!infoRes.ok || !infoJson?.data) {
          throw new Error(infoJson?.message || 'Program not found');
        }

        if (cancelled) return;

        const current = infoJson.data;
        setProgram(current);

        const all = Array.isArray(listJson?.data) ? listJson.data : [];
        const visible = all.filter(
          (item) =>
            isShownOnProgramsPage(item) &&
            String(item._id) !== String(current._id),
        );
        const currentCategory = getProgramCategoryId(current);
        const sameCategory = visible.filter(
          (item) => getProgramCategoryId(item) === currentCategory,
        );
        setRelated((sameCategory.length ? sameCategory : visible).slice(0, 6));
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || 'Failed to load program');
          setProgram(null);
          setRelated([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [programId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  const rating = useMemo(() => getProgramRating(program), [program]);
  const price = useMemo(() => formatProgramPrice(program?.price), [program]);
  const originalPrice = useMemo(
    () => getOriginalPrice(program?.price),
    [program],
  );
  const discount = useMemo(
    () => getDiscountPercent(Number(program?.price), originalPrice),
    [program, originalPrice],
  );
  const isDedicatedOverviewCourse = useMemo(
    () => isHtmlCssProgram(program) || isJavaFullStackProgram(program),
    [program],
  );
  const displayName = useMemo(() => getProgramDetailDisplayName(program), [program]);
  const hoursLabel = useMemo(() => getProgramDetailHoursLabel(program), [program]);
  const levelName = useMemo(() => getProgramDetailLevelName(program), [program]);
  const levelTag = useMemo(() => getProgramDetailLevelTag(program), [program]);
  const syllabus = useMemo(() => getProgramSyllabusGroups(program), [program]);
  const requirements = useMemo(() => getProgramRequirements(program), [program]);
  const faqs = useMemo(() => getProgramFaqs(program), [program]);
  const lead = useMemo(() => getProgramDetailLead(program), [program]);
  const overview = useMemo(() => getProgramFullDescription(program), [program]);
  const enrollCourseName = displayName || program?.name || '';
  const enrollCoursePrice = useMemo(
    () => formatProgramPrice(program?.price) || '',
    [program],
  );

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (loading || error || !program) return undefined;

    const elements = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      Boolean,
    );
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target?.id;
        if (id) setActiveSection(id);
      },
      {
        root: null,
        rootMargin: '-42% 0px -48% 0px',
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [loading, error, program]);

  if (loading) {
    return (
      <div className="pcd">
        <div className="pcd__loading">Loading course details…</div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="pcd">
        <div className="pcd__empty">
          <h1>Course not found</h1>
          <p>{error || 'This program is unavailable.'}</p>
          <Link to="/self-learning" className="pcd__btn pcd__btn--primary">
            Back to Self Learning
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pcd">
      <section className="pcd__hero">
        <div className="pcd__hero-shell">
          <div className="pcd__hero-top">
            <div className="pcd__hero-copy">
              <div className="pcd__eyebrow">
                <span className="pcd__eyebrow-icon" aria-hidden="true">
                  <BadgeIcon />
                </span>
                Accelerate your Career
              </div>

              <h1 className="pcd__title">{displayName}</h1>

              <p className="pcd__lead">
                {lead ||
                  `Master one of the most in-demand skills with this exclusive ${displayName} online course and expand your expertise with structured, self-paced learning.`}
              </p>

              <EnrollNowButton
                courseName={enrollCourseName}
                coursePrice={enrollCoursePrice}
                className="pcd__btn pcd__btn--cta"
              />
            </div>

            <aside className="pcd__hero-media-wrap">
              {program.cardImage || program.programImage ? (
                <img
                  className="pcd__hero-media"
                  src={program.cardImage || program.programImage}
                  alt={displayName}
                />
              ) : (
                <div className="pcd__hero-media pcd__hero-fallback" aria-hidden="true">
                  {(displayName || 'P').charAt(0)}
                </div>
              )}
              <div className="pcd__social-proof">
                <div className="pcd__avatars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p className="pcd__join-text">Join learners today</p>
                <div className="pcd__social-rating">
                  <RatingStars value={rating} className="rating-stars--compact" size={14} />
                </div>
              </div>
            </aside>
          </div>

          <div className="pcd__hero-bottom">
            <div className="pcd__stats-bar">
              <div className="pcd__stat">
                <span className="pcd__stat-icon" aria-hidden="true">
                  <PlayIcon />
                </span>
                <div className="pcd__stat-text">
                  <strong>{hoursLabel || '—'}</strong>
                  <span>of Recorded Content</span>
                </div>
              </div>
              <div className="pcd__stat">
                <span className="pcd__stat-icon" aria-hidden="true">
                  <DocsIcon />
                </span>
                <div className="pcd__stat-text">
                  <strong>Documents</strong>
                  <span>Learning Resources</span>
                </div>
              </div>
              <div className="pcd__stat">
                <span className="pcd__stat-icon" aria-hidden="true">
                  <TextIcon />
                </span>
                <div className="pcd__stat-text">
                  <strong>English</strong>
                  <span>Language</span>
                </div>
              </div>
              <div className="pcd__stat">
                <span className="pcd__stat-icon" aria-hidden="true">
                  <LevelsIcon />
                </span>
                <div className="pcd__stat-text">
                  <strong>{levelName}</strong>
                  <span>{levelTag}</span>
                </div>
              </div>
              <div className="pcd__stat pcd__stat--price">
                <div className="pcd__stat-text">
                  <span className="pcd__buy-only">Only</span>
                  <strong className="pcd__buy-price">{price || 'Enquire'}</strong>
                  <span className="pcd__buy-meta">
                    {originalPrice ? (
                      <span className="pcd__buy-original">
                        Rs. {originalPrice.toLocaleString('en-IN')}
                      </span>
                    ) : null}
                    {discount ? (
                      <span className="pcd__buy-off">{discount}% OFF</span>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="pcd__tabs" aria-label="Course sections">
        <div className="pcd__tabs-inner">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`pcd__tab${activeSection === section.id ? ' is-active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="pcd__content">
        <section id="overview" className="pcd__section">
          <h2>Course Overview</h2>
          <p>
            {overview ||
              `This comprehensive ${displayName} tutorial will help you earn expertise and develop applications with confidence. Throughout this course, you will learn core concepts, best practices, and hands-on skills in a valuable self-paced learning environment. After successful completion, you will gain a recognized certificate and well-rounded expertise in ${displayName}.`}
          </p>
          <p className="pcd__overview-meta">
            We will provide learning resources like documents, notes, and study materials to support your practice.
            {!isDedicatedOverviewCourse
              ? ` · ${getProgramTotalHoursLabel(program) || 'Flexible duration'} · ${getProgramLevelLabel()}`
              : null}
          </p>
        </section>

        <section id="syllabus" className="pcd__section">
          <h2>Explore Our Industry-Aligned Curriculum</h2>
          <div className="pcd__syllabus-head">
            <h3>Course Syllabus</h3>
            <button
              type="button"
              className="pcd__link-btn"
              onClick={() => setOpenModule(openModule === -2 ? 0 : -2)}
            >
              {openModule === -2 ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
          <div className="pcd__syllabus">
            {syllabus.map((group, index) => {
              const isOpen = openModule === -2 || openModule === index;
              return (
                <div
                  key={group.title}
                  className={`pcd__module${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="pcd__module-toggle"
                    onClick={() =>
                      setOpenModule(openModule === -2 ? index : isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span>
                      {group.title}
                      {group.meta ? (
                        <em className="pcd__module-meta"> · {group.meta}</em>
                      ) : null}
                    </span>
                    <span className="pcd__module-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen ? (
                    <ul className="pcd__module-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section id="requirements" className="pcd__section">
          <h2>Course Requirements</h2>
          <ul className="pcd__checklist">
            {requirements.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pcd__cta-banner">
            <div>
              <p className="pcd__cta-eyebrow">Accelerate your Career</p>
              <h3>{displayName}</h3>
            </div>
            <EnrollNowButton
              courseName={enrollCourseName}
              coursePrice={enrollCoursePrice}
              className="pcd__btn pcd__btn--primary"
            />
          </div>
        </section>

        <section id="certificate" className="pcd__section pcd__certificate">
          <div className="pcd__certificate-copy">
            <h2>Certification</h2>
            <h3>Industry-recognized {displayName} Certificate</h3>
            <ul className="pcd__checklist">
              <li>
                <CheckIcon />
                <span>Certificates are generated after the completion of course.</span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  Certificates are globally recognized & they help Enhance your
                  profile.
                </span>
              </li>
            </ul>
          </div>
          <div className="pcd__certificate-card" aria-hidden="true">
            <div className="pcd__certificate-seal">iB</div>
            <p className="pcd__certificate-brand">iBridge360</p>
            <p className="pcd__certificate-title">Certificate of Completion</p>
            <p className="pcd__certificate-course">{displayName}</p>
            <p className="pcd__certificate-note">This certifies successful completion</p>
          </div>
        </section>

        <section id="related" className="pcd__section">
          <div className="pcd__related-head">
            <h2>More Courses related to this skill</h2>
            <Link to="/self-learning" className="pcd__link-btn">
              View all courses
            </Link>
          </div>
          {related.length === 0 ? (
            <p className="pcd__muted">No related courses available right now.</p>
          ) : (
            <div className="pcd__related-grid">
              {related.map((item) => (
                <Link
                  key={item._id}
                  to={getProgramDetailPath(item)}
                  className="pcd__related-card"
                >
                  <div className="pcd__related-media">
                    {item.cardImage ? (
                      <img src={item.cardImage} alt="" loading="lazy" />
                    ) : (
                      <div className="pcd__related-fallback">
                        {(item.name || 'P').charAt(0)}
                      </div>
                    )}
                    <span className="pcd__related-lang">English</span>
                    <span className="pcd__related-rating">
                      <RatingStars value={getProgramRating(item)} className="rating-stars--light" size={11} />
                    </span>
                  </div>
                  <div className="pcd__related-body">
                    <h3>{item.name}</h3>
                    <div className="pcd__related-meta">
                      <span>{getProgramTotalHoursLabel(item)?.replace(' total', '') || '—'}</span>
                      <span>{getProgramLevelLabel()}</span>
                    </div>
                    <p className="pcd__related-price">
                      {formatProgramPrice(item.price) || 'Enquire for fee'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section id="faq" className="pcd__section">
          <h2>Frequently Asked Questions</h2>
          <div className="pcd__faq">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className={`pcd__faq-item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="pcd__faq-toggle"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen ? <p className="pcd__faq-answer">{faq.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="pcd__mobile-cta">
        <div>
          <p className="pcd__mobile-price">{price || 'Enquire'}</p>
          {discount ? <span className="pcd__buy-off">{discount}% OFF</span> : null}
        </div>
        <EnrollNowButton
          courseName={enrollCourseName}
          coursePrice={enrollCoursePrice}
          className="pcd__btn pcd__btn--primary"
        />
      </div>
    </div>
  );
}

export default ProgramCourseDetail;
