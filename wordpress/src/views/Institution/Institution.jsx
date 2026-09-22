import AudienceLandingPage from '../../components/sections/shared/AudienceLandingPage';
import institutionAudienceData from '../../content/audience/institutionAudienceData';

function Institution() {

  return (
    <>
<AudienceLandingPage config={institutionAudienceData} />
    </>
  );
}

export default Institution;
