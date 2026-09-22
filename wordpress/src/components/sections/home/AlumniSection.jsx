import AlumniLogoMarquee from './AlumniLogoMarquee';

function AlumniSection() {
  return (
    <>
      <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-065f797 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="065f797" data-element_type="section">
      						<div className="elementor-container elementor-column-gap-default">
      					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6651eb2" data-id="6651eb2" data-element_type="column">
      			<div className="elementor-widget-wrap elementor-element-populated">
      						<div className="elementor-element elementor-element-7ae34f4 elementor-widget elementor-widget-heading" data-id="7ae34f4" data-element_type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      			<h2 className="elementor-heading-title elementor-size-default">Where Our Alumni Work</h2>		</div>
      				</div>
      				<div className="elementor-element elementor-element-56045a2 elementor-widget elementor-widget-image-carousel" data-id="56045a2" data-element_type="widget" data-widget_type="image-carousel.default">
      				<div className="elementor-widget-container">
      					<AlumniLogoMarquee />
      				</div>
      				</div>
      					</div>
      		</div>
      					</div>
      		</section>
    </>
  );
}

export default AlumniSection;
