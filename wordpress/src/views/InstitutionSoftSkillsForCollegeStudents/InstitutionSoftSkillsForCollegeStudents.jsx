import useCorporateTrainingScrollPanels from '../../hooks/useCorporateTrainingScrollPanels';
import InstitutionSoftSkillsHeroSection from '../../components/sections/institution-soft-skills-for-college-students/InstitutionSoftSkillsHeroSection';
import InstitutionSoftSkillsMainSection from '../../components/sections/institution-soft-skills-for-college-students/InstitutionSoftSkillsMainSection';

function InstitutionSoftSkillsForCollegeStudents() {
  useCorporateTrainingScrollPanels();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="19905" className="elementor elementor-19905" data-elementor-post-type="page">
        <InstitutionSoftSkillsHeroSection />
        <InstitutionSoftSkillsMainSection />
      </div>
    </>
  );
}

export default InstitutionSoftSkillsForCollegeStudents;
