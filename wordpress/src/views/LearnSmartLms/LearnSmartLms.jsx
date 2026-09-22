import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AudienceLandingPage from '../../components/sections/shared/AudienceLandingPage';
import learnSmartLmsData from '../../content/audience/learnSmartLmsData';

function LearnSmartLms() {
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
<AudienceLandingPage config={learnSmartLmsData} />
    </>
  );
}

export default LearnSmartLms;
