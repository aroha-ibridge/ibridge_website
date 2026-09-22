import { PROOF_STATS } from '../../../content/shared/proofStats';

function StatsCtaSection() {
  return (
    <>
      <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-90d36b0 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="90d36b0" data-element_type="section" data-settings={'{"background_background":"classic"}'}>
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3a88f20" data-id="3a88f20" data-element_type="column" data-settings={'{"background_background":"classic"}'}>
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-6fc0939 elementor-widget elementor-widget-heading" data-id="6fc0939" data-element_type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      			<h2 className="elementor-heading-title elementor-size-default">Master interviews with <span className="gradient-text"> AI-driven practice</span> , instant feedback, and real-world scenario simulations—so you walk into interviews fully prepared</h2>		</div>
      				</div>
      				<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-inner-section elementor-element elementor-element-6d683a5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6d683a5" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-custom">
      					<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-32cb440" data-id="32cb440" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-8f7757a text-center elementor-widget elementor-widget-counter" data-id="8f7757a" data-element_type="widget" data-widget_type="counter.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-counter">
      			<div className="elementor-counter-title">Learners</div>			<div className="elementor-counter-number-wrapper">
      				<span className="elementor-counter-number-prefix"></span>
      				<span className="elementor-counter-number" data-duration="2000" data-to-value={PROOF_STATS.learnersCounterTo} data-from-value="0" data-delimiter=",">0</span>
      				<span className="elementor-counter-number-suffix">{PROOF_STATS.learnersCounterSuffix}</span>
      			</div>
      		</div>
      				</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3c2c1ac" data-id="3c2c1ac" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-cde4594 text-center elementor-widget elementor-widget-counter" data-id="cde4594" data-element_type="widget" data-widget_type="counter.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-counter">
      			<div className="elementor-counter-title">Hiring Companies</div>			<div className="elementor-counter-number-wrapper">
      				<span className="elementor-counter-number-prefix"></span>
      				<span className="elementor-counter-number" data-duration="2000" data-to-value={PROOF_STATS.hiringCompaniesCounterTo} data-from-value="0" data-delimiter=",">0</span>
      				<span className="elementor-counter-number-suffix">+ </span>
      			</div>
      		</div>
      				</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d063113" data-id="d063113" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-f2f47c0 text-center elementor-widget elementor-widget-counter" data-id="f2f47c0" data-element_type="widget" data-widget_type="counter.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-counter">
      			<div className="elementor-counter-title">Learners Placed</div>			<div className="elementor-counter-number-wrapper">
      				<span className="elementor-counter-number-prefix"></span>
      				<span className="elementor-counter-number" data-duration="2000" data-to-value={PROOF_STATS.placementPartnersCounterTo} data-from-value="0" data-delimiter=",">0</span>
      				<span className="elementor-counter-number-suffix">+ </span>
      			</div>
      		</div>
      				</div>
      				</div>
      					</div>
      		</div>
      				<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-32e4618" data-id="32e4618" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-492086f text-center elementor-widget elementor-widget-counter" data-id="492086f" data-element_type="widget" data-widget_type="counter.default">
      				<div className="elementor-widget-container">
      					<div className="elementor-counter">
      			<div className="elementor-counter-title">Learning Recommendation Reports</div>			<div className="elementor-counter-number-wrapper">
      				<span className="elementor-counter-number-prefix"></span>
      				<span className="elementor-counter-number" data-duration="2000" data-to-value={PROOF_STATS.reportsCounterTo} data-from-value="0" data-delimiter=",">0</span>
      				<span className="elementor-counter-number-suffix">+</span>
      			</div>
      		</div>
      				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
      					</div>
      		</div>
      					</div>
      		</section>
    </>
  );
}

export default StatsCtaSection;
