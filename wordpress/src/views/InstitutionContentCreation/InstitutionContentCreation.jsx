import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionContentCreationHeroSection from '../../components/sections/institution-content-creation/InstitutionContentCreationHeroSection';
import InstitutionContentCreationMainSection from '../../components/sections/institution-content-creation/InstitutionContentCreationMainSection';

function InstitutionContentCreation() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19824" className="elementor elementor-19824" data-elementor-post-type="page">
        <InstitutionContentCreationHeroSection />
        <InstitutionContentCreationMainSection />
      </div>
    </>
  );
}

export default InstitutionContentCreation;
