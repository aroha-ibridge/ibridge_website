import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionEpblHeroSection from '../../components/sections/institution-epbl/InstitutionEpblHeroSection';
import InstitutionEpblMainSection from '../../components/sections/institution-epbl/InstitutionEpblMainSection';

function InstitutionEpbl() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="18547" className="elementor elementor-18547" data-elementor-post-type="page">
        <InstitutionEpblHeroSection />
        <InstitutionEpblMainSection />
      </div>
    </>
  );
}

export default InstitutionEpbl;
