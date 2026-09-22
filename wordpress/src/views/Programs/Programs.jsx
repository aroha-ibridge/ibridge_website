import ProgramsTabsSection from '../../components/sections/programs/ProgramsTabsSection';
import WhyIbridgeSection from '../../components/sections/shared/WhyIbridgeSection';
import { WHY_IBRIDGE } from '../../content/programs/sharedDefaults';

function Programs() {
  return (
    <>
      <ProgramsTabsSection />
      <WhyIbridgeSection {...WHY_IBRIDGE} tone="soft" className="programs-page-section" />
    </>
  );
}

export default Programs;
