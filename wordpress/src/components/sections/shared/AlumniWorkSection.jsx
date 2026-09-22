import AlumniLogoMarquee from './AlumniLogoMarquee';
import { Container, Section } from '../../ui';

function AlumniWorkSection() {
  return (
    <Section
      tone="transparent"
      spacing="tight"
      className="program-page-flow__section program-alumni"
      id="alumni"
    >
      <Container>
        <div className="program-alumni__strip">
          <div
            className="elementor-element elementor-element-15bbb88f elementor-widget elementor-widget-image-carousel program-alumni__marquee"
            data-id="15bbb88f"
            data-element_type="widget"
            data-widget_type="image-carousel.default"
          >
            <div className="elementor-widget-container">
              <AlumniLogoMarquee />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AlumniWorkSection;
