const Rotator = function Rotator(el, settings) {
  const animations = ['fade', 'bounce', 'slide', 'zoom'];
  const defaultSettings = {
    animation: animations[0],
    separator: ',',
    speed: 1000,
  };
  let words = [];
  let currentWord = 0;
  let intervalId;

  if (el === undefined) { throw new Error('el is not defined'); }
  if (settings && typeof settings !== 'object') {
    throw new TypeError('Settings should be an object');
  }

  function init() {
    el.classList.add('js-rotate');

    settings = Object.assign({}, defaultSettings, settings);

    words = el.textContent
      .split(settings.separator)
      .map(x => x.trim())
      .filter(x => x);

    if (animations.indexOf(settings.animation) === -1) {
      console.error(`Animation name should be one of "${animations.join('", "')}". Reverted to "${defaultSettings.animation}".`);

      settings.animation = defaultSettings.animation;
    }

    if (words.length > 0) {
      el.textContent = words[0];
    } else {
      console.error('Word list is empty, there is nothing to rotate');
    }
  }

  function rotate() {
    const className = `js-rotate--${settings.animation}`;

    el.style.opacity = 0;
    el.classList.remove(className);

    setTimeout(() => el.classList.add(className), 20);

    currentWord = (currentWord + 1) % words.length;
    el.textContent = words[currentWord];
  }

  function start() {
    if (words.length === 0) return;
    intervalId = setInterval(rotate, settings.speed);
  }

  function stop() {
    clearInterval(intervalId);
  }

  init();

  return {
    start,
    stop,
  };
};

export default Rotator;
