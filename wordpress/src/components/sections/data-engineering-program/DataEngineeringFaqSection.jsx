import ProgramFaqSection from '../shared/ProgramFaqSection';
import dataEngineeringFaqCategories from './dataEngineeringFaqData';

function DataEngineeringFaqSection({
  description = 'Everything you need to know about the Data Engineering program — curriculum, mentorship, placements, and enrollment.',
  categories = dataEngineeringFaqCategories,
  title = 'Frequently Asked',
  titleAccent = 'Questions',
} = {}) {
  return (
    <ProgramFaqSection
      eyebrow="FAQ"
      title={title}
      titleAccent={titleAccent}
      description={description}
      categories={categories}
      id="faq"
      tone="transparent"
      spacing="flow"
      className="program-page-flow__section"
    />
  );
}

export default DataEngineeringFaqSection;
