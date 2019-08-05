import { IS_ACTIVE } from '../constants';

class Burger {
  init() {
    document.addEventListener('click', this.toggle.bind(this));
  };

  toggle(e) {
    this.btn = e.target.closest(`.${Burger.classNames.burger}`);
    if(!this.btn) return;

    e.preventDefault();

    this.name = this.btn.getAttribute('data-menu-target');
    this.menu = this.name 
      ? document.querySelector(`.${Burger.classNames.menu}[data-menu="${this.name}"]`)
      : document.querySelector(`.${Burger.classNames.menu}`);

    if(!this.menu) return;

    this.btn.classList.toggle(IS_ACTIVE);
    this.menu.classList.toggle(IS_ACTIVE);

    if (this.onToggle) {
      this.onToggle(this.btn, this.menu);
    };
  };

  close() {
    this.btns = [].slice.call(document.querySelectorAll(`.${Burger.classNames.burger}`));
    this.menus = [].slice.call(document.querySelectorAll(`.${Burger.classNames.menu}`));

    if (this.btns.length > 0 && this.menus.length > 0) {
      this.btns.forEach(btn => {
        btn.classList.remove(IS_ACTIVE);
      });
      this.menus.forEach(menu => {
        menu.classList.remove(IS_ACTIVE);
      });
      
      if (this.onClose) {
        this.onClose(this.btns, this.menus);
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
