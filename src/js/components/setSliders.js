import slick from 'slick-carousel';
import setlazy from './setLazy';

export default function setSliders() {
  const $sliders = $('.js-slider');


  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.dataset.slider;
    const options = {
      partners: {
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      }
    };

    $(slider).on('init', setlazy);
    $(slider).slick(options[name]);
  });
};
