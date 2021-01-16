"use strict";
export default () => {
window.addEventListener('load', function () {
    const animations = document.querySelectorAll('.animation');

    animations.forEach(function (animation) {
      let animationDuration = animation.dataset.duration,
        duration = animationDuration === void 0 ? '0' : animationDuration,
        animationDelay = animation.dataset.delay,
        delay = animationDelay === void 0 ? '0' : animationDelay;

      duration = duration
        .split(', ')
        .map(function (d) {
          return ''.concat(d, 's');
        })
        .join(',');
      delay = delay
        .split(', ')
        .map(function (d) {
          return ''.concat(d, 's');
        })
        .join(',');

      animation.style.animationDuration = ''.concat(duration);
      animation.style.animationDelay = ''.concat(delay);
    });
    
  });
}
