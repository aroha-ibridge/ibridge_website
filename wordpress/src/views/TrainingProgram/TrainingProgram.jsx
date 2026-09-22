import { useParams } from 'react-router-dom';

import useElementorToggle from '../../hooks/useElementorToggle';
import useHomeCarousels from '../../hooks/useHomeCarousels';
import { getTrainingProgramBySlug } from '../../content/training/trainingPrograms';
import DataEngineeringHeroSection from '../../components/sections/data-engineering-program/DataEngineeringHeroSection';
import AudienceLeadForm from '../../components/sections/shared/AudienceLeadForm';
import ProgramSectionHeader from '../../components/sections/shared/ProgramSectionHeader';
import ProgramCtaModal from '../../components/modals/ProgramCtaModal';
import { Container, Section } from '../../components/ui';
import NotFound from '../NotFound/NotFound';

/**
 * Training & Upskilling detail pages — hero (no sidebar form) + full consultation form.
 */
function TrainingProgram({ slug: slugProp } = {}) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const config = getTrainingProgramBySlug(slug);

  useHomeCarousels();
  useElementorToggle();

  if (!config) {
    return <NotFound />;
  }

  const { pageId = '508', hero = {}, modal = {} } = config;
  const programName = hero.title || modal.programName || 'this program';

  const leadForm = {
    variant: 'full',
    learnerType: 'Training',
    source: `Training & Upskilling — ${programName}`,
    organizationLabel: 'Company / Institution Name',
    contactLabel: 'Contact Person',
    emailLabel: 'Work Email',
    requirementLabel: 'Training Requirement',
    requirementPlaceholder: `e.g. Interested in ${programName} for our team / campus cohort`,
    submitLabel: 'Contact Us for This Course',
    showOrgSize: true,
    showMode: true,
    showTimeline: true,
    showTechnology: true,
    showRequirement: true,
    technologyOptions: [
      programName,
      'Data Engineering',
      'Data Science',
      'AI & Machine Learning',
      'Cloud Computing',
      'Cybersecurity',
      'DevOps',
      'Full Stack Development',
      'Business Analytics',
      'Leadership / Soft Skills',
      'Other',
    ],
  };

  return (
    <>
<div
        data-elementor-type="wp-page"
        data-elementor-id={pageId}
        className={`elementor elementor-${pageId} program-page-flow`}
        data-elementor-post-type="page"
      >
        <DataEngineeringHeroSection
          title={hero.title}
          description={`Looking for ${programName} training? Share your requirements below — our team will help with curriculum fit, delivery options, and next steps for you or your organization.`}
          formSource={hero.formSource || `Training — ${programName}`}
          formCourse={hero.formCourse || programName}
          formIdPrefix={hero.formIdPrefix || 'tr'}
          showStats={false}
          showEnquiryForm={false}
        />

        <Section id="consultation" tone="soft" spacing="flow" className="audience-landing-consultation">
          <Container className="max-w-4xl">
            <ProgramSectionHeader
              className="audience-landing-header"
              eyebrow="Contact Us"
              title="Interested in This"
              titleAccent="Course?"
              subtitle={`Get in touch to learn more about ${programName}, check batch availability, and start your enrollment.`}
            />
            <AudienceLeadForm formConfig={leadForm} />
          </Container>
        </Section>
      </div>

      <ProgramCtaModal
        triggerSelector={modal.triggerSelector || '.program-hero--centered'}
        programName={modal.programName || programName}
        title={modal.title || `Ready to start ${programName}?`}
        description={
          modal.description ||
          `Tell us about your goals and our learning advisors will share course details, batch options, and help you enroll in ${programName}.`
        }
        panelImage={modal.panelImage}
        panelImageAlt={modal.panelImageAlt || `${programName} training`}
        ctaLabel={modal.ctaLabel || 'Enquire About This Course'}
        eyebrow={modal.eyebrow || 'Now taking enquiries'}
        autoOpenDelay={modal.autoOpenDelay ?? 1500}
        dismissalScope="session"
      />
    </>
  );
}

export default TrainingProgram;
