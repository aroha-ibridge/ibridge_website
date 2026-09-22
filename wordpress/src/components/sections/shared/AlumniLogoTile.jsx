function AlumniLogoTile({ src, alt, ariaHidden = false, className = '' }) {
  return (
    <figure className={`alumni-logo-tile ${className}`.trim()}>
      <img
        src={src}
        alt={ariaHidden ? '' : alt}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

export default AlumniLogoTile;
