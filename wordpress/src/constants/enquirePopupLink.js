/** Clean CTA hash — opens enquiry popup without Elementor action URL in the status bar. */
export const ENQUIRE_POPUP_ID = '17162';
export const ENQUIRE_POPUP_HREF = '#enquire';
export const ENQUIRE_POPUP_CLOSE_EVENT = 'ibridge-enquire-popup-close';

const ENQUIRE_POPUP_LINK = ENQUIRE_POPUP_HREF;

/** Request the marketing Enquire popup to close (handled by useElementorPopups). */
export function closeEnquirePopup() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(ENQUIRE_POPUP_CLOSE_EVENT));
}

export default ENQUIRE_POPUP_LINK;
