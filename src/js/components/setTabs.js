class Tabs {
  init() {
    this._initTabs();
  };

  destroy() {
    this._destroy();
  };

  toggleTabs(e) {
    this.currentTab = e.target.closest('.'+Tabs.classNames.tab);
    if (!this.currentTab) return;

    e.preventDefault();
    this.wrap = this.currentTab.closest('.'+Tabs.classNames.wrap);
    if(!this.wrap) return;

    this.tabs = this.wrap.querySelectorAll('.'+Tabs.classNames.tab);
    this.items = this.wrap.querySelectorAll('.'+Tabs.classNames.item);
    this.name = this.currentTab.dataset.targetTab;
    this.currentItem = this.wrap.querySelector('[data-tab="'+this.name+'"]');

    if (this.tabs.length > 0 && this.tabs.length === this.items.length) {
      let itemsLength = this.tabs.length;

      for (let i = 0; i < itemsLength; i++) {
        this.tabs[i].classList.remove(Tabs.classNames.active);
        this.items[i].classList.remove(Tabs.classNames.active);
      };

      this.currentTab.classList.add(Tabs.classNames.active);
      this.currentItem.classList.add(Tabs.classNames.active);
    };
  };

  _initTabs() {
    this.toggleTabsBinded = this.toggleTabs.bind(this);
    document.addEventListener('click', this.toggleTabsBinded);
  };

  _destroy() {
    document.removeEventListener('click', this.toggleTabsBinded);
  };
};

Tabs.classNames = {
  wrap: 'js-tabs',
  tab: 'js-tab',
  item: 'js-tabs-item',
  active: 'is-active'
};

export default function setTabs() {
  const tabs = new Tabs();
  tabs.init();
};
