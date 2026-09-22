import EnquiryForm from '../forms/EnquiryForm';

function ExplorePopup() {
  return (
    <div
      data-elementor-type="popup"
      data-elementor-id="17162"
      className="enquire-popup elementor elementor-17162 elementor-location-popup"
      data-elementor-settings={'{"entrance_animation":"zoomIn","entrance_animation_mobile":"zoomIn","exit_animation":"zoomIn","exit_animation_mobile":"zoomIn","entrance_animation_duration":{"unit":"px","size":0.6,"sizes":[]},"a11y_navigation":"yes","timing":[]}'}
      data-elementor-post-type="elementor_library"
    >
      <EnquiryForm source="Enquire popup" idPrefix="popup" />
    </div>
  );
}

export default ExplorePopup;
