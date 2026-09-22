/**
 * Renders a numeric rating with matching filled / half / empty stars.
 * Example: 4.9 → "4.9" + ★★★★☆ (almost full 5th star)
 */
export function RatingStars({ value, className = '', size = 14 }) {
  const rating = Math.max(0, Math.min(5, Number(value) || 0));
  const label = rating.toFixed(1);

  return (
    <span className={`rating-stars ${className}`.trim()} aria-label={`${label} out of 5 stars`}>
      <span className="rating-stars__value">{label}</span>
      <span className="rating-stars__icons" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => {
          const fill = Math.max(0, Math.min(1, rating - index));
          return (
            <span
              key={index}
              className="rating-stars__star"
              style={{ width: size, height: size }}
            >
              <svg viewBox="0 0 24 24" className="rating-stars__star-empty">
                <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
              </svg>
              {fill > 0 ? (
                <span
                  className="rating-stars__star-fill"
                  style={{ width: `${fill * 100}%` }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: size, height: size }}>
                    <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
                  </svg>
                </span>
              ) : null}
            </span>
          );
        })}
      </span>
    </span>
  );
}
