import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionExpertTalksHeroSection from '../../components/sections/institution-expert-talks/InstitutionExpertTalksHeroSection';
import InstitutionExpertTalksMainSection from '../../components/sections/institution-expert-talks/InstitutionExpertTalksMainSection';

function InstitutionExpertTalks() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19095" className="elementor elementor-19095" data-elementor-post-type="page">
        <InstitutionExpertTalksHeroSection />
        <InstitutionExpertTalksMainSection />
      </div>
    </>
  );
}

export default InstitutionExpertTalks;
