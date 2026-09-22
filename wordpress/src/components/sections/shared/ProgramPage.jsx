import useHomeCarousels from '../../../hooks/useHomeCarousels';
import useElementorToggle from '../../../hooks/useElementorToggle';

import ProgramCtaModal from '../../modals/ProgramCtaModal';
import { buildProgramJsonLd } from '../../seo/seoJsonLd';
import { getPageSeo } from '../../../content/seo/pageSeoRegistry';
import GoogleAdsTag from '../../seo/GoogleAdsTag';
import CourseStructureSection from './CourseStructureSection';
import LearnerTestimonialsSection from './LearnerTestimonialsSection';
import TrustPartnersSection from './TrustPartnersSection';
import AlumniWorkSection from './AlumniWorkSection';
import CareerOpportunitiesSection from './CareerOpportunitiesSection';
import WhyIbridgeSection from './WhyIbridgeSection';
import { WHY_IBRIDGE } from '../../../content/programs/sharedDefaults';
import DataEngineeringHeroSection from '../data-engineering-program/DataEngineeringHeroSection';
import DataEngineeringKeyHighlightsSection from '../data-engineering-program/DataEngineeringKeyHighlightsSection';
import DataEngineeringCertificateSection from '../data-engineering-program/DataEngineeringCertificateSection';
import DataEngineeringProjectsSection from '../data-engineering-program/DataEngineeringProjectsSection';
import DataEngineeringToolsSection from '../data-engineering-program/DataEngineeringToolsSection';
import DataEngineeringFaqSection from '../data-engineering-program/DataEngineeringFaqSection';
import DataEngineeringProgramCtaSection from '../data-engineering-program/DataEngineeringProgramCtaSection';
import { stripBase } from '../../../utils/siteBase';

/**
 * Reusable program page — uses the Data Engineering sections as-is (design unchanged).
 * Pass `config` to swap content for Full Stack / Data Science / etc.
 */
function ProgramPage({ config }) {
  useHomeCarousels();
  useElementorToggle();

  const {
    seo,
    pageId = '508',
    hero = {},
    alumni = null,
    trust = null,
    curriculum = {},
    whyIbridge = WHY_IBRIDGE,
    keyHighlights = null,
    certificate = null,
    projects = {},
    tools = null,
    testimonials = {},
    career = null,
    faq = {},
    cta = {},
    modal = {},
    path,
  } = config;

  const pagePath =
    path ||
    (typeof window !== 'undefined' ? stripBase(window.location.pathname) : '/');

  const registrySeo = getPageSeo(pagePath);
  const jsonLd = buildProgramJsonLd({
    title: registrySeo.title || seo?.title || hero.title,
    description: registrySeo.description || seo?.description || hero.description,
    path: pagePath,
    faqCategories: faq?.categories || [],
  });

  return (
    <>
      <GoogleAdsTag />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        data-elementor-type="wp-page"
        data-elementor-id={pageId}
        className={`elementor elementor-${pageId} program-page-flow`}
        data-elementor-post-type="page"
      >
        <DataEngineeringHeroSection {...hero} />
        {trust ? <TrustPartnersSection {...trust} /> : null}
        {alumni !== false ? <AlumniWorkSection {...(alumni || {})} /> : null}

        <CourseStructureSection
          eyebrow={curriculum.eyebrow ?? null}
          title={curriculum.title}
          titleAccent={curriculum.titleAccent}
          description={curriculum.description}
          modules={curriculum.modules}
          tone="transparent"
          spacing="flow"
          className="program-page-flow__section"
        />

        {whyIbridge !== false ? <WhyIbridgeSection {...(whyIbridge || WHY_IBRIDGE)} /> : null}

        {keyHighlights ? <DataEngineeringKeyHighlightsSection {...keyHighlights} /> : null}
        {certificate ? <DataEngineeringCertificateSection {...certificate} /> : null}
        <DataEngineeringProjectsSection {...projects} />
        {tools ? <DataEngineeringToolsSection {...tools} /> : null}
        <LearnerTestimonialsSection {...testimonials} />
        {career ? <CareerOpportunitiesSection {...career} /> : null}
        <DataEngineeringFaqSection {...faq} />
        <DataEngineeringProgramCtaSection {...cta} />
      </div>

      <ProgramCtaModal
        triggerSelector={modal.triggerSelector ?? `.elementor-${pageId} .elementor-element-6ef8997`}
        programName={modal.programName}
        title={modal.title}
        description={modal.description}
        panelImage={modal.panelImage}
        panelImageAlt={modal.panelImageAlt}
        ctaLabel={modal.ctaLabel}
      />
    </>
  );
}

export default ProgramPage;
