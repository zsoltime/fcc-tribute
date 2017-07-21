const SimpleParallax = function simpleParallax(selector) {
  function remap(val, inMin, inMax, outMin, outMax) {
    return ((
      ((val - inMin) * (outMax - outMin)) /
      (inMax - inMin)
    ) + outMin);
  }

  function getLimit(el) {
    return el.offsetTop + el.offsetHeight;
  }

  function objToCss(obj) {
    return Object.keys(obj)
      .reduce((acc, key) => {
        acc += `${key}(${obj[key]}) `;
        return acc;
      }, '');
  }

  function update() {
    const scrolledHeight = window.pageYOffset;

    document.querySelectorAll(selector)
      .forEach((el) => {
        const transform = {
          translateY: 0,
          scale: 1,
        };

        if (scrolledHeight > el.offsetTop && scrolledHeight <= getLimit(el)) {
          const position = (Math.round((scrolledHeight / el.offsetHeight) * 10000) / 100);

          transform.translateY = `${remap(position, 0, 100, 0, -25)}%`;
          transform.scale = remap(position, 0, 100, 1, 1.5);
        }

        el.style.transform = objToCss(transform);
      });
  }

  return { update };
};

export default SimpleParallax;
