import { remap, objToCss } from './helpers';

export default function simpleParallax(selector) {
  const getLimit = el => el.offsetTop + el.offsetHeight;

  function update() {
    const scrolledHeight = window.pageYOffset;

    document.querySelectorAll(selector)
      .forEach((el) => {
        const transform = {
          translateY: 0,
          scale: 1,
        };
        const isVisible = scrolledHeight > el.offsetTop && scrolledHeight <= getLimit(el);

        if (isVisible) {
          const position = (Math.round((scrolledHeight / el.offsetHeight) * 10000) / 100);

          transform.translateY = `${remap(position, 0, 100, 0, -25)}%`;
          transform.scale = remap(position, 0, 100, 1, 1.5);
        }

        el.style.transform = objToCss(transform);
      });
  }

  return { update };
}
