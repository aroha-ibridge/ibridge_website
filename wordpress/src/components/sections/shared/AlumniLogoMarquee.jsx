import ALUMNI_LOGOS from '../../../constants/alumniLogos';
import AlumniLogoTile from './AlumniLogoTile';

function LogoGroup({ logos, groupId, ariaHidden = false }) {
  return (
    <div
      className="alumni-logo-marquee__group"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo) => (
        <div key={`${groupId}-${logo.src}`} className="alumni-logo-marquee__slide">
          <AlumniLogoTile src={logo.src} alt={logo.alt} ariaHidden={ariaHidden} />
        </div>
      ))}
    </div>
  );
}

function AlumniLogoMarquee() {
  return (
    <div className="alumni-logo-marquee" aria-label="Companies where our alumni work">
      <div className="alumni-logo-marquee__track">
        <LogoGroup logos={ALUMNI_LOGOS} groupId="set-a" />
        <LogoGroup logos={ALUMNI_LOGOS} groupId="set-b" ariaHidden />
      </div>
    </div>
  );
}

export default AlumniLogoMarquee;
