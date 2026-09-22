import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function useLearnerTestimonialCarousel({
  carouselRef,
  prevRef,
  nextRef,
  paginationRef,
  slideCount,
}) {
  useEffect(() => {
    const element = carouselRef.current;
    const prevEl = prevRef.current;
    const nextEl = nextRef.current;
    const paginationEl = paginationRef.current;

    if (!element || !prevEl || !nextEl || !paginationEl) return undefined;

    let swiper;
    try {
      const count =
        typeof slideCount === 'number'
          ? slideCount
          : element.querySelectorAll('.swiper-slide').length;
      swiper = new Swiper(element, {
        modules: [Autoplay, Navigation, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: count > 3,
        speed: 700,
        grabCursor: true,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          prevEl,
          nextEl,
        },
        pagination: {
          el: paginationEl,
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        },
      });
    } catch (error) {
      console.error('[LearnerTestimonials] Swiper init failed', error);
      return undefined;
    }

    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy(true, true);
      }
    };
  }, [carouselRef, prevRef, nextRef, paginationRef, slideCount]);
}

export default useLearnerTestimonialCarousel;
