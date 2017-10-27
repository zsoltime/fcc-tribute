export function remap(val, inMin, inMax, outMin, outMax) {
  return ((
    ((val - inMin) * (outMax - outMin)) /
    (inMax - inMin)
  ) + outMin);
}

export function objToCss(obj) {
  return Object.keys(obj)
    .reduce((acc, key) => {
      acc += `${key}(${obj[key]}) `;
      return acc;
    }, '');
}
