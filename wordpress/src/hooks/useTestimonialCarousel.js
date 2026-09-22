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

function initTestimonialCarousel(element) {
  if (element.classList.contains('swiper-initialized')) return null;

  const wrapper = element.querySelector('.swiper-wrapper');
  if (!wrapper) return null;

  const slideCount = wrapper.children.length;
  if (slideCount === 0) return null;

  const settings = parseWidgetSettings(element);
  const slidesPerView = Number(settings.slides_per_view) || 3;
  const spaceBetween = settings.space_between?.size ?? 10;
  const spaceTablet = settings.space_between_tablet?.size ?? spaceBetween;
  const spaceMobile = settings.space_between_mobile?.size ?? spaceBetween;
  const speed = Number(settings.speed) || 500;
  const autoplaySpeed = Number(settings.autoplay_speed) || 3000;

  return new Swiper(element, {
    modules: [Autoplay],
    slidesPerView,
    spaceBetween,
    loop: settings.loop === 'yes' && slideCount > slidesPerView,
    speed,
    autoplay:
      settings.autoplay === 'yes'
        ? {
            delay: autoplaySpeed,
            disableOnInteraction: settings.pause_on_interaction !== 'yes',
            pauseOnMouseEnter: settings.pause_on_hover === 'yes',
          }
        : false,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: spaceMobile },
      768: { slidesPerView: 2, spaceBetween: spaceTablet },
      1025: { slidesPerView, spaceBetween },
    },
  });
}

function useTestimonialCarousel() {
  useEffect(() => {
    const carousels = document.querySelectorAll(
      '.elementor-widget-testimonial-carousel .elementor-main-swiper',
    );
    const instances = Array.from(carousels).map(initTestimonialCarousel);

    return () => {
      instances.forEach((instance) => instance?.destroy(true, true));
    };
  }, []);
}

export default useTestimonialCarousel;
