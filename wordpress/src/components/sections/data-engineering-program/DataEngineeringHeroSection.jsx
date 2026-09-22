import EnquiryForm from '../../forms/EnquiryForm';
import AlumniLogoMarquee from '../shared/AlumniLogoMarquee';

/**
 * Program hero — original Data Engineering design.
 * Optional props override copy for other programs; markup/styles stay the same.
 */
function DataEngineeringHeroSection({
  title = 'Job-Ready Data Engineering Course',
  description = 'Master Data Engineering with an industry-focused certification program covering SQL, Python, Data Warehousing, AWS Cloud, Power BI, and Linux. Gain practical experience through hands-on projects, expert-led training, and a Capstone Project to prepare for high-demand Data Engineering careers.',
  formSource = 'Data Engineering page — inline form',
  formCourse = 'Data Engineering',
  formIdPrefix = 'de',
  duration = '3 Months',
  showStats = true,
  showEnquiryForm = true,
  showAlumniInHero = false,
  useGradientTitle = true,
} = {}) {
  return (
    <>
      <section data-particle_enable="false" data-particle-mobile-disabled="false" className={`elementor-section elementor-top-section elementor-element elementor-element-a2db022 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle${!showEnquiryForm ? ' program-hero--centered' : ''}`} data-id="a2db022" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className={`elementor-column elementor-top-column elementor-element elementor-element-c9c2b4e ${showEnquiryForm ? 'elementor-col-33' : 'elementor-col-100'}`} data-id="c9c2b4e" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className={`elementor-element elementor-element-49ac208 ${useGradientTitle ? 'gradient-text' : ''} elementor-widget elementor-widget-heading`} data-id="49ac208" data-element_type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      			<h1 className={`elementor-heading-title elementor-size-default${!useGradientTitle ? ' program-hero-h1--current' : ''}`}>{title}</h1>		</div>
      				</div>
      				<div className="elementor-element elementor-element-e586b52 elementor-widget elementor-widget-text-editor" data-id="e586b52" data-element_type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
<p>{description}</p>												</div>
      				</div>
      				{showAlumniInHero ? (
      				<>
      				<div className="elementor-element elementor-element-32ae82c4 elementor-widget elementor-widget-heading" data-id="32ae82c4" data-element_type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      			<h2 className="elementor-heading-title elementor-size-default">Where Our Alumni Work</h2>		</div>
      				</div>
      				<div className="elementor-element elementor-element-15bbb88f elementor-widget elementor-widget-image-carousel" data-id="15bbb88f" data-element_type="widget" data-widget_type="image-carousel.default">
      				<div className="elementor-widget-container">
      					<AlumniLogoMarquee />
      				</div>
      				</div>
      				</>
      				) : null}
      				{showEnquiryForm ? (
      				<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-inner-section elementor-element elementor-element-b0a899d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0a899d" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-edff7c5" data-id="edff7c5" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-cb8a092 elementor-align-center elementor-tablet-align-center elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="cb8a092" data-element_type="widget" data-widget_type="button.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-button-wrapper">
      			<button type="button" className="elementor-button elementor-button-link elementor-size-sm" data-open-popup="17162">
      						<span className="elementor-button-content-wrapper">
      									<span className="elementor-button-text">Enquire Now</span>
      					</span>
      					</button>
      		</div>
      				</div>
      				</div>
      					</div>
      		</div>
      				</div>
      		</section>
      				) : null}
      				{showStats ? (
      				<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-inner-section elementor-element elementor-element-89a8d8e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="89a8d8e" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5dcfcc7" data-id="5dcfcc7" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-84869ae elementor-position-left elementor-vertical-align-middle elementor-position-top elementor-widget elementor-widget-image-box" data-id="84869ae" data-element_type="widget" data-widget_type="image-box.default">
      				<div className="elementor-widget-container">
      			<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img decoding="async" width="100" height="100" src="/wp-content/uploads/2024/04/Group-165.png" className="attachment-full size-full wp-image-16883" alt="" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Duration</h3><p className="elementor-image-box-description">{duration}</p></div></div>		</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-551f8ee" data-id="551f8ee" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-e8818ce elementor-position-left elementor-vertical-align-middle elementor-position-top elementor-widget elementor-widget-image-box" data-id="e8818ce" data-element_type="widget" data-widget_type="image-box.default">
      				<div className="elementor-widget-container">
      			<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="100" height="100" src="/wp-content/uploads/2024/04/Group-164.png" className="attachment-full size-full wp-image-16884" alt="" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Case Studies</h3><p className="elementor-image-box-description">20 +</p></div></div>		</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b0ef698" data-id="b0ef698" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-ead37e5 elementor-position-left elementor-vertical-align-middle elementor-position-top elementor-widget elementor-widget-image-box" data-id="ead37e5" data-element_type="widget" data-widget_type="image-box.default">
      				<div className="elementor-widget-container">
      			<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="100" height="100" src="/wp-content/uploads/2024/04/Group-166.png" className="attachment-full size-full wp-image-16882" alt="" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Training</h3><p className="elementor-image-box-description">Online/Offline </p></div></div>		</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				) : null}
      					</div>
      		</div>
      				{showEnquiryForm ? (
      				<>
      				<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c5f5ad3" data-id="c5f5ad3" data-element_type="column">
      			<div className="elementor-widget-wrap">
      							</div>
      		</div>
      				<div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-3df0d96" data-id="3df0d96" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<EnquiryForm
      							source={formSource}
      							defaultCourse={formCourse}
      							idPrefix={formIdPrefix}
      						/>
      					</div>
      		</div>
      				</>
      				) : null}
      					</div>
      		</section>
    </>
  );
}

export default DataEngineeringHeroSection;
