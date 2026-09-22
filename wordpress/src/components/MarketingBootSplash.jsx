import { useEffect, useState } from 'react';

/**
 * Branded overlay while critical marketing CSS loads.
 * Fades out once ready, then unmounts.
 */
function MarketingBootSplash({ ready }) {
  const [visible, setVisible] = useState(!ready);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (!ready || !visible) return undefined;

    setHiding(true);
    const timer = window.setTimeout(() => setVisible(false), 420);
    return () => window.clearTimeout(timer);
  }, [ready, visible]);

  if (!visible) return null;

  return (
    <div
      className={
        hiding
          ? 'marketing-boot-splash marketing-boot-splash--hide'
          : 'marketing-boot-splash'
      }
      role="status"
      aria-live="polite"
      aria-label="Loading iBridge360"
    >
      <img
        src="/wp-content/uploads/2024/02/final-illustrator-logo-1-1-300x86.png"
        alt="iBridge360"
        width={72}
        height={72}
        className="marketing-boot-splash__logo"
      />
      <div className="marketing-boot-splash__spinner" aria-hidden="true" />
      <p className="marketing-boot-splash__tagline">Where learning happens</p>
    </div>
  );
}

export default MarketingBootSplash;
