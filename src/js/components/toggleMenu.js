import { $DOC, $BODY, IS_ACTIVE, NO_SCROLL } from '../constants';

class Burger {
  init() {
    $DOC.on('click', `.${Burger.classNames.burger}`, this.toggle.bind(this));
  };

  toggle(e) {
    e.preventDefault();

    const name = e.currentTarget.getAttribute('data-menu-target');
    const $target = name 
      ? $(`.${Burger.classNames.menu}[data-menu="${name}"]`)
      : $(`.${Burger.classNames.menu}`);

    $(e.currentTarget).toggleClass(IS_ACTIVE);
    $target.toggleClass(IS_ACTIVE);

    if (this.onToggle) {
      this.onToggle($(e.currentTarget), $target);
    };
  };

  close() {
    const $burgers = $(`.${Burger.classNames.burger}`);
    const $targets = $(`.${Burger.classNames.menu}`);

    if ($burgers.length > 0 && $targets.length > 0) {
      $burgers.removeClass(IS_ACTIVE);
      $targets.removeClass(IS_ACTIVE);
      
      if (this.onClose) {
        this.onClose($burgers, $targets);
      };
    };   
  };
};

Burger.classNames = {
  burger: 'js-burger',
  menu: 'js-menu'
};

export default function toggleMenu() {
  const burger = new Burger();
  burger.init();
};
