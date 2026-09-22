import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionElpaasHeroSection from '../../components/sections/institution-experiential-learning-platform/InstitutionElpaasHeroSection';
import InstitutionElpaasMainSection from '../../components/sections/institution-experiential-learning-platform/InstitutionElpaasMainSection';

function InstitutionExperientialLearningPlatform() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19651" className="elementor elementor-19651" data-elementor-post-type="page">
        <InstitutionElpaasHeroSection />
        <InstitutionElpaasMainSection />
      </div>
    </>
  );
}

export default InstitutionExperientialLearningPlatform;
