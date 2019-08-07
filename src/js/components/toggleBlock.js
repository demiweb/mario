import { $DOC, IS_ACTIVE } from '../constants';

export default function toggleBlock() {
  const btn = 'js-toggle-btn';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const $wrap = $(e.currentTarget).parent();
    if(!$wrap.length) return;

    const $block = $wrap.find('.js-toggle-content');

    $block.toggleClass(IS_ACTIVE);
    $(e.currentTarget).toggleClass(IS_ACTIVE);
  });
};
