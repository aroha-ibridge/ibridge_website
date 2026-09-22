import AudienceLandingPage from '../../components/sections/shared/AudienceLandingPage';
import individualLearnerAudienceData from '../../content/audience/individualLearnerAudienceData';

function IndividualLearner() {

  return (
    <>
<AudienceLandingPage config={individualLearnerAudienceData} />
    </>
  );
}

export default IndividualLearner;
