import useElementorToggle from '../../hooks/useElementorToggle';
import TermsConditionsSection from '../../components/sections/terms-conditions/TermsConditionsSection';

function TermsConditions() {
  useElementorToggle();

  return (
    <>
<div data-elementor-type="wp-page" data-elementor-id="134" className="elementor elementor-134" data-elementor-post-type="page">
      <TermsConditionsSection />
      </div>
    </>
  );
}

export default TermsConditions;
