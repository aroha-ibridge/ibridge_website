import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AudienceLandingPage from '../../components/sections/shared/AudienceLandingPage';
import onlineAssessmentPlatformData from '../../content/audience/onlineAssessmentPlatformData';

function OnlineAssessmentPlatform() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [hash]);

  return (
    <>
<AudienceLandingPage config={onlineAssessmentPlatformData} />
    </>
  );
}

export default OnlineAssessmentPlatform;
