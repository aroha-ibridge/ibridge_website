import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function useMentorsCarousel({ carouselRef, prevRef, nextRef, paginationRef }) {
  useEffect(() => {
    const element = carouselRef.current;
    const prevEl = prevRef.current;
    const nextEl = nextRef.current;
    const paginationEl = paginationRef.current;

    if (!element || !prevEl || !nextEl || !paginationEl) return undefined;

    const swiper = new Swiper(element, {
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 16,
      loop: true,
      speed: 650,
      grabCursor: true,
      watchOverflow: true,
      autoplay: {
        delay: 5500,
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
        640: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, [carouselRef, prevRef, nextRef, paginationRef]);
}

export default useMentorsCarousel;
