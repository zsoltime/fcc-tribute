import '../../node_modules/particles.js/particles';

// eslint-disable-next-line no-undef
particlesJS('particles-js', {
  particles: {
    number: {
      value: 75,
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.25,
      random: true,
    },
    size: {
      value: 4,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 125,
      color: '#ffffff',
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      out_mode: 'out',
      bounce: true,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      resize: true,
    },
  },
  retina_detect: true,
});
