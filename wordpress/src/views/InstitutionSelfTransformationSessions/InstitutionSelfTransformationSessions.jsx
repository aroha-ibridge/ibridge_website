import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionSelfTransformationHeroSection from '../../components/sections/institution-self-transformation-sessions/InstitutionSelfTransformationHeroSection';
import InstitutionSelfTransformationMainSection from '../../components/sections/institution-self-transformation-sessions/InstitutionSelfTransformationMainSection';

function InstitutionSelfTransformationSessions() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19434" className="elementor elementor-19434" data-elementor-post-type="page">
        <InstitutionSelfTransformationHeroSection />
        <InstitutionSelfTransformationMainSection />
      </div>
    </>
  );
}

export default InstitutionSelfTransformationSessions;
