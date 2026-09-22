import { useEffect } from 'react';

const SMART_SLIDER_CONFIG = {
  admin: false,
  'background.video.mobile': 1,
  loadingTime: 2000,
  randomize: { randomize: 0, randomizeFirst: 0 },
  callbacks: '',
  alias: { id: 0, smoothScroll: 0, slideSwitch: 0, scroll: 1 },
  align: 'normal',
  isDelayed: 0,
  responsive: {
    mediaQueries: {
      all: false,
      desktopportrait: ['(min-width: 1200px)'],
      tabletportrait: [
        '(orientation: landscape) and (max-width: 1199px) and (min-width: 901px)',
        '(orientation: portrait) and (max-width: 1199px) and (min-width: 701px)',
      ],
      mobileportrait: [
        '(orientation: landscape) and (max-width: 900px)',
        '(orientation: portrait) and (max-width: 700px)',
      ],
    },
    base: { sliderWidth: 400, sliderHeight: 300, slideWidth: 400, slideHeight: 300 },
    hideOn: {
      desktopLandscape: false,
      desktopPortrait: false,
      tabletLandscape: false,
      tabletPortrait: false,
      mobileLandscape: false,
      mobilePortrait: false,
    },
    onResizeEnabled: true,
    type: 'auto',
    sliderHeightBasedOn: 'real',
    focusUser: 1,
    focusEdge: 'auto',
    breakpoints: [
      { device: 'tabletPortrait', type: 'max-screen-width', portraitWidth: 1199, landscapeWidth: 1199 },
      { device: 'mobilePortrait', type: 'max-screen-width', portraitWidth: 700, landscapeWidth: 900 },
    ],
    enabledDevices: {
      desktopLandscape: 0,
      desktopPortrait: 1,
      tabletLandscape: 0,
      tabletPortrait: 1,
      mobileLandscape: 0,
      mobilePortrait: 1,
    },
    sizes: {
      desktopPortrait: { width: 400, height: 300, max: 3000, min: 400 },
      tabletPortrait: { width: 400, height: 300, customHeight: false, max: 1199, min: 400 },
      mobilePortrait: { width: 320, height: 240, customHeight: false, max: 900, min: 320 },
    },
    overflowHiddenPage: 0,
    focus: { offsetTop: '#wpadminbar', offsetBottom: '' },
  },
  controls: {
    mousewheel: 0,
    touch: 'horizontal',
    keyboard: 1,
    blockCarouselInteraction: 1,
  },
  playWhenVisible: 1,
  playWhenVisibleAt: 0.5,
  lazyLoad: 0,
  lazyLoadNeighbor: 0,
  blockrightclick: 0,
  maintainSession: 0,
  autoplay: {
    enabled: 1,
    start: 1,
    duration: 8000,
    autoplayLoop: 1,
    allowReStart: 0,
    pause: { click: 1, mouse: '0', mediaStarted: 1 },
    resume: { click: 0, mouse: '0', mediaEnded: 1, slidechanged: 0 },
    interval: 1,
    intervalModifier: 'loop',
    intervalSlide: 'current',
  },
  perspective: 1000,
  layerMode: {
    playOnce: 0,
    playFirstLayer: 1,
    mode: 'skippable',
    inAnimation: 'mainInEnd',
  },
  parallax: {
    enabled: 1,
    mobile: 0,
    is3D: 0,
    animate: 1,
    horizontal: 'mouse',
    vertical: 'mouse',
    origin: 'slider',
    scrollmove: 'both',
  },
  backgroundParallax: { strength: 0.5, tablet: 0, mobile: 0 },
  postBackgroundAnimations: 0,
  carousel: 1,
  carouselSideSlides: 1,
  showcase: {
    duration: 800,
    ease: 'easeOutQuad',
    direction: 'horizontal',
    distance: 60,
    animate: {
      opacity: { before: 0.7, active: 1, after: 0.7 },
      scale: { before: 0.5, active: 0.9, after: 0.5 },
      x: null,
      y: null,
      z: null,
      rotationX: null,
      rotationY: null,
      rotationZ: null,
    },
    overlay: '1',
  },
  initCallbacks() {},
};

const SCRIPT_PATHS = [
  '/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3/Application/Frontend/Assets/dist/n2.min55c8.js',
  '/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3/Application/Frontend/Assets/dist/smartslider-frontend.min55c8.js',
  '/wp-content/plugins/nextend-smart-slider3-pro/Public/SmartSlider3Pro/Slider/SliderType/Showcase/Assets/dist/ss-showcase.min55c8.js',
];

function ensureN2Global() {
  if (!window._N2) {
    window._N2 = {
      _r: [],
      _d: [],
      r(...args) {
        this._r.push(args);
      },
      d(...args) {
        this._d.push(args);
      },
    };
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function initShowcase(root) {
  if (!root || root.dataset.smartSliderReady === 'true') return true;
  if (!window._N2?.SmartSliderShowcase) return false;

  new window._N2.SmartSliderShowcase('n2-ss-3', SMART_SLIDER_CONFIG);
  root.dataset.smartSliderReady = 'true';
  window.requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  return true;
}

function queueShowcaseInit(root) {
  window._N2.r('documentReady', () => {
    window._N2.r(['documentReady', 'smartslider-frontend', 'ss-showcase'], () => {
      initShowcase(root);
    });
  });
}

/**
 * Smart Slider 3 "Showcase" — center mentor large, neighbours smaller (see WP about-us).
 */
function useMentorsSlider() {
  useEffect(() => {
    const root = document.getElementById('n2-ss-3');
    if (!root) return undefined;

    let cancelled = false;
    ensureN2Global();

    const run = async () => {
      try {
        for (const src of SCRIPT_PATHS) {
          if (cancelled) return;
          await loadScript(src);
        }

        if (cancelled) return;

        if (!initShowcase(root)) {
          queueShowcaseInit(root);
        }
      } catch {
        root.querySelector('.n2-ss-showcase-slides')?.classList.add('n2-ss-showcase-slides--ready');
      }
    };

    run();

    return () => {
      cancelled = true;
      delete root.dataset.smartSliderReady;
    };
  }, []);
}

export default useMentorsSlider;
