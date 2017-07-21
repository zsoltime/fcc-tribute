import SimpleParallax from './modules/SimpleParallax';
import Rotator from './modules/Rotator';

const parallax = SimpleParallax('.js-parallax');
const rotator = Rotator(document.getElementById('rotate'), {
  animation: 'zoom',
  speed: 2000,
});

window.addEventListener('scroll', parallax.update);
setTimeout(rotator.start, 2000);
