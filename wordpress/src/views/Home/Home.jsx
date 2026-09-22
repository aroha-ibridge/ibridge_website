import useHomeCarousels from '../../hooks/useHomeCarousels';
import useAnimatedHeadline from '../../hooks/useAnimatedHeadline';
import useElementorCounters from '../../hooks/useElementorCounters';
import useEaelTabs from '../../hooks/useEaelTabs';
import useElementorToggle from '../../hooks/useElementorToggle';
import HeroSection from '../../components/sections/home/HeroSection';
import AlumniSection from '../../components/sections/home/AlumniSection';
import AboutSection from '../../components/sections/home/AboutSection';
import IbridgeForHeadingSection from '../../components/sections/home/IbridgeForHeadingSection';
import LearnerTypeCardsSection from '../../components/sections/home/LearnerTypeCardsSection';
import CareerPathSection from '../../components/sections/home/CareerPathSection';
import SelfLearningPathSection from '../../components/sections/home/SelfLearningPathSection';
import AiApproachTabsSection from '../../components/sections/home/AiApproachTabsSection';
import FaqSection from '../../components/sections/home/FaqSection';
import StatsCtaSection from '../../components/sections/home/StatsCtaSection';

function Home() {
  useHomeCarousels();
  useAnimatedHeadline();
  useElementorCounters();
  useEaelTabs();
  useElementorToggle();

  return (
    <>
<div data-elementor-type="wp-post" data-elementor-id="9" className="elementor elementor-9 home-page" data-elementor-post-type="page">
      <HeroSection />
      <AlumniSection />
      <AboutSection />
      <IbridgeForHeadingSection />
      <LearnerTypeCardsSection />
      <CareerPathSection />
      <SelfLearningPathSection />
      <AiApproachTabsSection />
      <FaqSection />
      <StatsCtaSection />
      </div>
    </>
  );
}

export default Home;
