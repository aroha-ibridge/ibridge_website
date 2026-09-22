import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionOnlineOfflineHeroSection from '../../components/sections/institution-online-offline-programs/InstitutionOnlineOfflineHeroSection';
import InstitutionOnlineOfflineMainSection from '../../components/sections/institution-online-offline-programs/InstitutionOnlineOfflineMainSection';

function InstitutionOnlineOfflinePrograms() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19659" className="elementor elementor-19659" data-elementor-post-type="page">
        <InstitutionOnlineOfflineHeroSection />
        <InstitutionOnlineOfflineMainSection />
      </div>
    </>
  );
}

export default InstitutionOnlineOfflinePrograms;
