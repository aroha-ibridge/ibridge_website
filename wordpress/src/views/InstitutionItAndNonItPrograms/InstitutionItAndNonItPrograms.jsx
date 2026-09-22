import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionItNonItHeroSection from '../../components/sections/institution-it-and-non-it-programs/InstitutionItNonItHeroSection';
import InstitutionItNonItMainSection from '../../components/sections/institution-it-and-non-it-programs/InstitutionItNonItMainSection';

function InstitutionItAndNonItPrograms() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19854" className="elementor elementor-19854" data-elementor-post-type="page">
        <InstitutionItNonItHeroSection />
        <InstitutionItNonItMainSection />
      </div>
    </>
  );
}

export default InstitutionItAndNonItPrograms;
