import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import CorporateElpHeroSection from '../../components/sections/corporate-elp/CorporateElpHeroSection';
import CorporateElpMainSection from '../../components/sections/corporate-elp/CorporateElpMainSection';

function CorporateElp() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="20234" className="elementor elementor-20234" data-elementor-post-type="page">
        <CorporateElpHeroSection />
        <CorporateElpMainSection />
      </div>
    </>
  );
}

export default CorporateElp;
