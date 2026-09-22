import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function parseWidgetSettings(element) {
  const widget = element.closest('[data-settings]');
  if (!widget) return {};

  try {
    const raw = widget.getAttribute('data-settings') || '{}';
    return JSON.parse(raw.replace(/&quot;/g, '"'));
  } catch {
    return {};
  }
}

function initImageCarousel(element) {
  if (element.classList.contains('swiper-initialized')) return null;

  const wrapper = element.querySelector('.swiper-wrapper');
  if (!wrapper) return null;

  const slides = Array.from(wrapper.children);
  if (slides.length === 0) return null;

  // Elementor duplicates slides for seamless infinite scroll.
  slides.forEach((slide) => {
    wrapper.appendChild(slide.cloneNode(true));
  });

  const settings = parseWidgetSettings(element);
  const speed = Number(settings.speed) || 1500;
  const spaceDesktop = settings.image_spacing_custom?.size ?? 100;
  const spaceTablet = settings.image_spacing_custom_tablet?.size ?? 58;
  const spaceMobile = settings.image_spacing_custom_mobile?.size ?? 33;
  const slidesDesktop = Number(settings.slides_to_show) || 5;
  const slidesTablet = Number(settings.slides_to_show_tablet) || 4;
  const slidesMobile = Number(settings.slides_to_show_mobile) || 3;

  element.style.setProperty('--e-image-carousel-slides-to-show', String(slidesDesktop));

  const swiper = new Swiper(element, {
    modules: [Autoplay],
    slidesPerView: slidesDesktop,
    spaceBetween: spaceDesktop,
    loop: slides.length > 1,
    speed,
    allowTouchMove: false,
    watchSlidesProgress: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: settings.pause_on_hover !== 'no',
    },
    breakpoints: {
      0: { slidesPerView: slidesMobile, spaceBetween: spaceMobile },
      768: { slidesPerView: slidesTablet, spaceBetween: spaceTablet },
      1025: { slidesPerView: slidesDesktop, spaceBetween: spaceDesktop },
    },
    on: {
      init(sw) {
        sw.wrapperEl.style.transitionTimingFunction = 'linear';
      },
      setTransition(sw) {
        sw.wrapperEl.style.transitionTimingFunction = 'linear';
      },
    },
  });

  return swiper;
}

/**
 * Initializes Elementor image carousels on the Home page.
 * Replaces Elementor/Swiper jQuery bindings from the static HTML.
 */
function useHomeCarousels() {
  useEffect(() => {
    const carousels = document.querySelectorAll('.elementor-image-carousel-wrapper.swiper');
    const instances = Array.from(carousels).map(initImageCarousel);

    return () => {
      instances.forEach((instance) => instance?.destroy(true, true));
    };
  }, []);
}

export default useHomeCarousels;
