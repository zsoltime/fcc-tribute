import SimpleParallax from './modules/SimpleParallax';
const parallax = SimpleParallax('.js-parallax');
window.addEventListener('scroll', parallax.update);
