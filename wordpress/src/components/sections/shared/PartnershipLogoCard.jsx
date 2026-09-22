function PartnershipLogoCard({
  src,
  alt,
  name,
  ariaHidden = false,
  tileClassName = '',
}) {
  return (
    <div className="partnership-logo-card">
      <figure className={`partnership-logo-card__figure ${tileClassName}`.trim()}>
        <img
          src={src}
          alt={ariaHidden ? '' : alt}
          loading="lazy"
          decoding="async"
        />
      </figure>
      {name ? (
        <p className="partnership-logo-card__name">{name}</p>
      ) : null}
    </div>
  );
}

export default PartnershipLogoCard;
