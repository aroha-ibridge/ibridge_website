import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionFdpHeroSection from '../../components/sections/institution-faculty-development-program/InstitutionFdpHeroSection';
import InstitutionFdpMainSection from '../../components/sections/institution-faculty-development-program/InstitutionFdpMainSection';

function InstitutionFacultyDevelopmentProgram() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19356" className="elementor elementor-19356" data-elementor-post-type="page">
        <InstitutionFdpHeroSection />
        <InstitutionFdpMainSection />
      </div>
    </>
  );
}

export default InstitutionFacultyDevelopmentProgram;
