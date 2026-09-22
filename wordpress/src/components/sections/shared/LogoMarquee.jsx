import AlumniLogoTile from './AlumniLogoTile';
import PartnershipLogoCard from './PartnershipLogoCard';

function expandLogos(logos, minCount) {
  if (!minCount || logos.length >= minCount) return logos;

  const expanded = [];
  while (expanded.length < minCount) {
    expanded.push(...logos);
  }
  return expanded;
}

function LogoGroup({
  logos,
  groupId,
  tileClassName,
  showName = false,
  ariaHidden = false,
}) {
  return (
    <div className="logo-marquee__group" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo, index) => (
        <div key={`${groupId}-${logo.src}-${index}`} className="logo-marquee__slide">
          {showName ? (
            <PartnershipLogoCard
              src={logo.src}
              alt={logo.alt}
              name={logo.name}
              ariaHidden={ariaHidden}
              tileClassName={tileClassName}
            />
          ) : (
            <AlumniLogoTile
              src={logo.src}
              alt={logo.alt}
              ariaHidden={ariaHidden}
              className={tileClassName}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function LogoMarquee({
  logos,
  ariaLabel,
  className = '',
  tileClassName = '',
  duration = 40,
  minLogos = 0,
  showName = false,
}) {
  const expandedLogos = expandLogos(logos, minLogos);

  return (
    <div className={`logo-marquee ${className}`.trim()} aria-label={ariaLabel}>
      <div className="logo-marquee__fade logo-marquee__fade--left" aria-hidden="true" />
      <div
        className="logo-marquee__track"
        style={{ animationDuration: `${duration}s` }}
      >
        <LogoGroup
          logos={expandedLogos}
          groupId="set-a"
          tileClassName={tileClassName}
          showName={showName}
        />
        <LogoGroup
          logos={expandedLogos}
          groupId="set-b"
          tileClassName={tileClassName}
          showName={showName}
          ariaHidden
        />
      </div>
      <div className="logo-marquee__fade logo-marquee__fade--right" aria-hidden="true" />
    </div>
  );
}

export default LogoMarquee;
