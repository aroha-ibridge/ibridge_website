import { ADVISOR } from '../../content/chatbot/chatbotKnowledge';
import { useId } from 'react';

/**
 * Illustrated iBridge360 advisor avatar (the chat persona in ADVISOR).
 *
 * Inline SVG so it stays crisp at every size (64px launcher down to the 30px
 * message rows) and needs no network asset. Drawn on a 100x100 grid:
 * background → back hair → neck → shoulders → face → fringe → features →
 * headset → front hair strands.
 */
function AdvisorAvatar({ size = 44, className = '', label }) {
  const uid = useId().replace(/:/g, '');
  const caption = label || `${ADVISOR.name}, ${ADVISOR.role}`;
  const bg = `ibcAvBg-${uid}`;
  const top = `ibcAvTop-${uid}`;
  const hair = `ibcAvHair-${uid}`;
  const clip = `ibcAvClip-${uid}`;
  return (
    <svg
      className={`ibc-avatar-svg ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={caption}
      focusable="false"
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8effe" />
          <stop offset="55%" stopColor="#f3ecfb" />
          <stop offset="100%" stopColor="#fde6ee" />
        </linearGradient>
        <linearGradient id={top} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a6fd4" />
          <stop offset="100%" stopColor="#18479f" />
        </linearGradient>
        <linearGradient id={hair} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#4a3557" />
          <stop offset="100%" stopColor="#31233c" />
        </linearGradient>
        <clipPath id={clip}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clip})`}>
        <rect width="100" height="100" fill={`url(#${bg})`} />

        {/* hair — crown and the lengths falling either side of the face */}
        <path
          d="M28 52C28 34 38 24 50 24s22 10 22 28c0 9 1 17 3 23l-9 3c1-10 1-22 0-30H34c-1 8-1 20 0 30l-9-3c2-6 3-14 3-23z"
          fill={`url(#${hair})`}
        />
        <path
          d="M40 32c3-3 7-4.5 11-4.2"
          stroke="#ffffff"
          strokeOpacity="0.24"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* neck and shoulders */}
        <path d="M44 56h12v15c0 4-12 4-12 0z" fill="#eab492" />
        <path d="M13 100c2-16 16-25 37-25s35 9 37 25z" fill={`url(#${top})`} />
        <path
          d="M50 75.4c-3.6.5-6.3 2.6-7.3 5.8L50 84.4l7.3-3.2c-1-3.2-3.7-5.3-7.3-5.8z"
          fill="#ffffff"
          opacity="0.16"
        />

        {/* face */}
        <ellipse cx="50" cy="46" rx="15.5" ry="17.5" fill="#f7c9a8" />
        <circle cx="34.6" cy="47.5" r="3.1" fill="#f0bb98" />
        <circle cx="65.4" cy="47.5" r="3.1" fill="#f0bb98" />
        <circle cx="34.4" cy="51.6" r="1.3" fill="#f2c66c" />
        <circle cx="65.6" cy="51.6" r="1.3" fill="#f2c66c" />

        {/* side-swept fringe */}
        <path
          d="M34.8 45c-1.2-13.4 5.6-20.4 15.2-20.4S66.4 31 65.4 45.6c-1.8-7-4.6-11-8.6-13-5 3.8-13 5.6-18 3.4-2 2-3.4 5-4 9z"
          fill={`url(#${hair})`}
        />

        {/* features */}
        <path
          d="M40.2 39.8c2-1.5 4.7-1.5 6.7-.2"
          stroke="#4a3557"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M53.1 39.6c2-1.3 4.7-1.3 6.7.2"
          stroke="#4a3557"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="43.6" cy="46.2" rx="2.2" ry="2.8" fill="#2e2136" />
        <ellipse cx="56.4" cy="46.2" rx="2.2" ry="2.8" fill="#2e2136" />
        <circle cx="44.4" cy="45.2" r="0.85" fill="#ffffff" />
        <circle cx="57.2" cy="45.2" r="0.85" fill="#ffffff" />
        <path
          d="M40.9 43.2c1.7-1.3 3.9-1.3 5.5 0"
          stroke="#2e2136"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M53.6 43.2c1.6-1.3 3.8-1.3 5.5 0"
          stroke="#2e2136"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M50 48.4v3.1c0 .8-.6 1.3-1.4 1.3"
          stroke="#e2a883"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <ellipse cx="39.4" cy="52.4" rx="3.2" ry="2" fill="#f08e8e" opacity="0.35" />
        <ellipse cx="60.6" cy="52.4" rx="3.2" ry="2" fill="#f08e8e" opacity="0.35" />
        <path
          d="M46.3 55.6c1.3 2.3 6.1 2.3 7.4 0"
          stroke="#c76a5c"
          strokeWidth="1.9"
          strokeLinecap="round"
          fill="none"
        />

        {/* headset — kept light so it reads against the dark hair */}
        <path
          d="M32 47a18 20 0 0 1 36 0"
          stroke="#c3d0e8"
          strokeWidth="2.9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 47a18 20 0 0 1 36 0"
          stroke="#f1f5fd"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="28.9" y="42.8" width="6.4" height="9.8" rx="3.2" fill="#2b3a5c" />
        <rect x="64.7" y="42.8" width="6.4" height="9.8" rx="3.2" fill="#2b3a5c" />
        <rect x="30.4" y="44.6" width="3.4" height="6.2" rx="1.7" fill="#5f74a0" />
        <rect x="66.2" y="44.6" width="3.4" height="6.2" rx="1.7" fill="#5f74a0" />
        <path
          d="M31.9 53.4c0 6.1 3.8 9.8 8.9 10.8"
          stroke="#2b3a5c"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="41.6" cy="64.4" r="2.3" fill="#2b3a5c" />

        {/* hair falling in front of the shoulders */}
        <path d="M31 60c-1 9-2.5 17-5 24l9 2c1.5-9 2-17 1.8-26z" fill={`url(#${hair})`} />
        <path d="M69 60c1 9 2.5 17 5 24l-9 2c-1.5-9-2-17-1.8-26z" fill={`url(#${hair})`} />
      </g>

      <circle cx="50" cy="50" r="49" fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" />
    </svg>
  );
}

export default AdvisorAvatar;
