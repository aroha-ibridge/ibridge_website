import { Link } from 'react-router-dom';

const LEARNER_TYPE_CARDS = [
  {
    wrapperClass: 'eael-wrapper-link-9fd6138',
    columnId: '9fd6138',
    to: '/individual-learner',
    ariaLabel: 'Learn more about Individual Learners',
    iconSrc: '/wp-content/uploads/2024/12/5.png',
    iconId: '19411',
    innerSectionId: 'd16d273',
    iconColId: '5e43082',
    imageWidgetId: '71a53bf',
    headingColId: 'b5aa473',
    headingWidgetId: '9fde5eb',
    title: 'Individual Learners',
    textWidgetId: 'fefe03a',
    description:
      'Our courses are designed to close skill gaps and prepare learners for future-ready careers. By following our proven coaching methodology, you gain the confidence and expertise to secure a job and build the career you aspire to',
    dividerId: '155d4ee',
    buttonWidgetId: 'dc1b186',
  },
  {
    wrapperClass: 'eael-wrapper-link-e50a965',
    columnId: 'e50a965',
    to: '/corporate',
    ariaLabel: 'Learn more about Corporate Programs',
    iconSrc: '/wp-content/uploads/2024/12/Content-Creation-ServicesSkills-for-College-Students.png',
    iconId: '20012',
    innerSectionId: '8b58656',
    iconColId: '00eed6d',
    imageWidgetId: '0646d11',
    headingColId: 'f627cfe',
    headingWidgetId: '88978ef',
    title: 'Corporate Programs',
    textWidgetId: '43d6b67',
    description:
      'Reduce L&D expenses and maximize ROI with iBridge360’s blended training solutions. Our combination of in-person and online learning ensures cost-effective, high-quality development that accelerates business growth.',
    dividerId: '5538e53',
    buttonWidgetId: 'd740fd8',
  },
  {
    wrapperClass: 'eael-wrapper-link-9b7bf63',
    columnId: '9b7bf63',
    to: '/institution',
    ariaLabel: 'Learn more about Academic Partnerships',
    iconSrc: '/wp-content/uploads/2024/12/Experiential-Learning-Platform-as-a-Service-ELPaaS-3-2.png',
    iconId: '20085',
    innerSectionId: 'b9fdfbe',
    iconColId: 'abdcf71',
    imageWidgetId: '08f0963',
    headingColId: 'd7eeb6e',
    headingWidgetId: '0b9115a',
    title: 'Academic Partnerships',
    textWidgetId: 'c1a36c3',
    description:
      'Our finishing school programs combine soft skills and hard skills to shape students’ overall personality and professional competence. This holistic approach grooms them to confidently face the outside world and excel in the job market.',
    dividerId: 'e8a5644',
    buttonWidgetId: '24fa581',
  },
  {
    wrapperClass: 'eael-wrapper-link-oap360',
    columnId: 'oap360a1',
    to: '/products',
    ariaLabel: 'Learn more about Online Assessment Platform',
    iconSrc: '/wp-content/uploads/2024/12/6.png',
    iconId: '19412',
    innerSectionId: 'd16d273',
    iconColId: '5e43082',
    imageWidgetId: '71a53bf',
    headingColId: 'b5aa473',
    // Reuse Elementor style widget IDs so typography/button match other cards
    headingWidgetId: '9fde5eb',
    title: 'Online Assessment Platform',
    textWidgetId: 'fefe03a',
    description:
      'Conduct secure online assessments for hiring, campus recruitment, employee skill evaluation, and certification with AI-powered proctoring, automated scoring, analytics, and candidate management.',
    dividerId: '155d4ee',
    buttonWidgetId: 'dc1b186',
  },
];

const arrowIcon = (
  <svg aria-hidden="true" className="e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
  </svg>
);

function LearnerTypeCardsSection() {
  return (
    <>
      <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-d7459de elementor-section-boxed elementor-section-height-default elementor-section-height-default learner-type-cards-section" data-id="d7459de" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-wider learner-type-cards-grid">
      			{LEARNER_TYPE_CARDS.map((card) => (
      				<div
      					key={card.columnId}
      					data-eael-wrapper-link={card.wrapperClass}
      					className={`elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-${card.columnId} container learner-type-card`}
      					data-id={card.columnId}
      					data-element_type="column"
      				>
      					<Link
      						to={card.to}
      						className={`${card.wrapperClass} --eael-wrapper-link-tag learner-type-card__overlay`}
      						aria-label={card.ariaLabel}
      					/>
      					<div className="elementor-widget-wrap elementor-element-populated">
      						<section data-particle_enable="false" data-particle-mobile-disabled="false" className={`elementor-section elementor-inner-section elementor-element elementor-element-${card.innerSectionId} elementor-section-boxed elementor-section-height-default elementor-section-height-default`} data-id={card.innerSectionId} data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${card.iconColId}`} data-id={card.iconColId} data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className={`elementor-element elementor-element-${card.imageWidgetId} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={card.imageWidgetId} data-element_type="widget" data-widget_type="image.default">
      				<div className="elementor-widget-container">
      													<img loading="lazy" decoding="async" width="55" height="52" src={card.iconSrc} className={`attachment-large size-large wp-image-${card.iconId} learner-type-card__icon`} alt="" />													</div>
      				</div>
      					</div>
      		</div>
      				<div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${card.headingColId}`} data-id={card.headingColId} data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className={`elementor-element elementor-element-${card.headingWidgetId} heading elementor-widget elementor-widget-heading`} data-id={card.headingWidgetId} data-element_type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      			<h2 className="elementor-heading-title elementor-size-default">{card.title}</h2>		</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      				<div className={`elementor-element elementor-element-${card.textWidgetId} text elementor-widget elementor-widget-text-editor learner-type-card__body`} data-id={card.textWidgetId} data-element_type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      							<p>{card.description}</p>						</div>
      				</div>
      				<div className="learner-type-card__footer">
      				<div className={`elementor-element elementor-element-${card.dividerId} divider elementor-widget-divider--view-line elementor-widget elementor-widget-divider`} data-id={card.dividerId} data-element_type="widget" data-widget_type="divider.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-divider">
      			<span className="elementor-divider-separator">
      						</span>
      		</div>
      				</div>
      				</div>
      				<div className={`elementor-element elementor-element-${card.buttonWidgetId} elementor-align-left elementor-widget elementor-widget-button`} data-id={card.buttonWidgetId} data-element_type="widget" data-widget_type="button.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-button-wrapper">
      			<Link to={card.to} className="elementor-button elementor-button-link elementor-size-sm learner-type-card__cta">
      						<span className="elementor-button-content-wrapper">
      						<span className="elementor-button-icon">
      				{arrowIcon}			</span>
      									<span className="elementor-button-text">Learn More</span>
      					</span>
      					</Link>
      		</div>
      				</div>
      				</div>
      				</div>
      					</div>
      		</div>
      			))}
      					</div>
      		</section>
    </>
  );
}

export default LearnerTypeCardsSection;
