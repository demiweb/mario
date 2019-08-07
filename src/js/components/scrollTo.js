import { $DOC, $HTMLBODY, ACTIVE } from '../constants';

export default function scrollTo() {
  const btn = 'js-scroll-to';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).data('scroll-to');
    const $target = $(`[data-scroll-to-target="${id}"]`);
    let OFFSET = 0;    

    $HTMLBODY.animate({
      scrollTop: $target.offset().top - OFFSET
    }, 1000);
  });
};

// import scrollIt from '../lib/scrollIt';

// export default function scrollTo() {
//   document.addEventListener('click', (e) => {
//     const btn = e.target.closest('.js-scroll-to');

//     if(!btn) return;
//     e.preventDefault();
//     const id = btn.getAttribute('data-scroll-to');
//     const target = document.querySelector('.js-scroll-to-target[data-scroll-to-target="'+id+'"]');

//     console.log({ id, target });

//     const scroll = new scrollIt(target, {
//       duration: 1000,
//       easing: 'easeInOutCubic',
//       callback: function() {
//         console.log(`Just finished scrolling to ${window.pageYOffset}px`);
//       }
//     });

//     scroll.init();
//   });
// };

