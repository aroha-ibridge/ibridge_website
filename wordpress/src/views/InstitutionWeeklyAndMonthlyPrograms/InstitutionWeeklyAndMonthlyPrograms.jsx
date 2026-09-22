import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionWeeklyMonthlyHeroSection from '../../components/sections/institution-weekly-and-monthly-programs/InstitutionWeeklyMonthlyHeroSection';
import InstitutionWeeklyMonthlyMainSection from '../../components/sections/institution-weekly-and-monthly-programs/InstitutionWeeklyMonthlyMainSection';

function InstitutionWeeklyAndMonthlyPrograms() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19959" className="elementor elementor-19959" data-elementor-post-type="page">
        <InstitutionWeeklyMonthlyHeroSection />
        <InstitutionWeeklyMonthlyMainSection />
      </div>
    </>
  );
}

export default InstitutionWeeklyAndMonthlyPrograms;
