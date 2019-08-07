import lozad from 'lozad';
import { debounce } from 'throttle-debounce';

export default function lazyLoading() {
  const imgs = [].slice.call(document.querySelectorAll('.js-lazy'));

  if(!imgs.length) return;
  imgs.forEach(img => {
    const imageDesc = img.dataset.backgroundImageDesc;
    const imageMob = img.dataset.backgroundImageMob;

    if (imageDesc && imageMob) {
      if (window.matchMedia('(min-width: 576px)').matches) {
        img.setAttribute('data-background-image', imageDesc);
      } else {
        img.setAttribute('data-background-image', imageMob);
      };

      function setSrc() {
        const style = window.getComputedStyle(img);

        if (window.matchMedia('(min-width: 576px)').matches && style.backgroundImage) {
          img.style.backgroundImage = `url(${imageDesc})`;
        } else if(style.backgroundImage) {
          img.style.backgroundImage = `url(${imageMob})`;
        };
      };

      const setSrcDebounced = debounce(66, setSrc);
      window.addEventListener('resize', setSrcDebounced);
    };

    const observer = lozad(img);
    observer.observe();
  });
};
