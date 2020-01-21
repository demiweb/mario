import setlazy from './setLazy';
import { tns } from 'tiny-slider/src/tiny-slider.js';
import { debounce } from 'throttle-debounce';

export default function setSliders() {
  const sliders = [].slice.call(document.querySelectorAll('.js-slider'));

  if(!sliders.length) return;

  sliders.forEach(slider => {
    const name = slider.dataset.slider;
    const wrap = slider.parentNode.classList.contains('slider__wrap') ? slider.parentNode : null;
    let prev, next;
    if (wrap) {
      prev = wrap.querySelector('.js-prev');
      next = wrap.querySelector('.js-next');
    };
    const options = {
      partners: {
        container: slider,
        onInit: setlazy,
        items: 2,
        mouseDrag: true,
        controls: false,
        nav: false,
        responsive: {
          576: {
            items: 3
          },
          768: {
            items: 4
          },
          992: {
            items: 5
          },
          1200: {
            items: 7
          }
        }
      },
      sertificats: {
        container: slider,
        onInit: setlazy,
        items: 1,
        mouseDrag: true,
        prevButton: prev,
        nextButton: next,
        nav: false,
        responsive: {
          768: {
            items: 3
          },
          992: {
            items: 5
          }
        }
      },
      items: {
        container: slider,
        onInit: setlazy,
        items: 1,
        mouseDrag: true,
        prevButton: prev,
        nextButton: next,
        nav: false,
        gutter: 10,
        responsive: {
          480: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4,
            gutter: 30
          }
        }
      }
    };

    let mySlider;    

    function initSlider() {
      if (name === 'sertificats') {
        if (window.matchMedia('(min-width: 576px)').matches) {          

          if (mySlider && mySlider.getInfo === null ) {
            mySlider.rebuild();
          } else {
            mySlider = tns(options[name]);
          };          
        } else if(mySlider && mySlider.getInfo !== null) {
          mySlider.destroy();
        }
      } else {
        mySlider = tns(options[name]);
      };
    };

    initSlider();

    const initSliderDebounced = debounce(66, initSlider);

    window.addEventListener('resize', initSliderDebounced);
  });
};
