import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import CorporateContentCreationHeroSection from '../../components/sections/corporate-content-creation/CorporateContentCreationHeroSection';
import CorporateContentCreationMainSection from '../../components/sections/corporate-content-creation/CorporateContentCreationMainSection';

function CorporateContentCreation() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="20237" className="elementor elementor-20237" data-elementor-post-type="page">
        <CorporateContentCreationHeroSection />
        <CorporateContentCreationMainSection />
      </div>
    </>
  );
}

export default CorporateContentCreation;
