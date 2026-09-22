import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AudienceLandingPage from '../../components/sections/shared/AudienceLandingPage';
import trainingUpskillingData from '../../content/audience/trainingUpskillingData';

function TrainingUpskilling() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || hash.startsWith('#feature-')) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [hash]);

  return (
    <>
<AudienceLandingPage config={trainingUpskillingData} />
    </>
  );
}

export default TrainingUpskilling;
