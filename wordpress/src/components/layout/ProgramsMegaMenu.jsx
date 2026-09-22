import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getProgramsByCategory,
  PROGRAMS_MEGA_CATEGORIES,
} from '../../constants/programsMegaMenu';

const CATEGORY_ICONS = {
  star: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.4l.9-5.4L4.2 9.2l5.4-.8L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pipeline: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M4 7h6v4H4zM14 7h6v4h-6zM9 13h6v4H9zM7 11v2M17 11v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M4 19V5M4 19h16M8 16V10M12 16V7M16 16v-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M8.5 8.5 5 12l3.5 3.5M15.5 8.5 19 12l-3.5 3.5M13.2 6.5l-2.4 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M13 3 5.5 13.5H12l-1 7.5L18.5 10H12l1-7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const COURSE_ICON = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
    <path
      d="M12 6.2C10.2 4.9 7.9 4.4 5.5 5.2 5.2 5.3 5 5.6 5 5.9V17.2c0 .5.5.8 1 .7 2.1-.6 4.2-.2 5.9.9M12 6.2c1.8-1.3 4.1-1.8 6.5-1 .3.1.5.4.5.7V17.2c0 .5-.5.8-1 .7-2.1-.6-4.2-.2-5.9.9"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * QSpiders-style Programs mega-menu: category rail + course grid.
 */
function ProgramsMegaMenu({ onNavigate }) {
  const [activeId, setActiveId] = useState(PROGRAMS_MEGA_CATEGORIES[0].id);
  const courses = useMemo(() => getProgramsByCategory(activeId), [activeId]);
  const activeCategory = PROGRAMS_MEGA_CATEGORIES.find((c) => c.id === activeId);

  return (
    <div className="programs-megamenu programs-megamenu--grid">
      <aside className="programs-megamenu__sidebar" aria-label="Program categories">
        <ul className="programs-megamenu__cats">
          {PROGRAMS_MEGA_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                className={`programs-megamenu__cat${activeId === cat.id ? ' is-active' : ''}`}
                onMouseEnter={() => setActiveId(cat.id)}
                onFocus={() => setActiveId(cat.id)}
                onClick={() => setActiveId(cat.id)}
              >
                <span className="programs-megamenu__cat-icon">{CATEGORY_ICONS[cat.icon]}</span>
                <span className="programs-megamenu__cat-label">{cat.title}</span>
                <span className="programs-megamenu__cat-chevron" aria-hidden="true">
                  ›
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="programs-megamenu__main">
        <div className="programs-megamenu__main-head">
          <p className="programs-megamenu__main-title">{activeCategory?.title}</p>
          <Link to="/programs" className="programs-megamenu__view-all" onClick={onNavigate}>
            View all programs →
          </Link>
        </div>

        <div className="programs-megamenu__grid">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.to}
              className="programs-megamenu__card"
              onClick={onNavigate}
            >
              <span
                className="programs-megamenu__card-icon"
                style={{ background: `${course.color}14`, color: course.color }}
              >
                {COURSE_ICON}
              </span>
              <span className="programs-megamenu__card-body">
                <span className="programs-megamenu__card-title">{course.title}</span>
                <span className="programs-megamenu__card-desc">{course.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgramsMegaMenu;
