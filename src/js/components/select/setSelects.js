import Select from 'select-custom';
import addSelectsPlaceholder from './addPlaceholder';
import filterSearch from './filterSearch';
 
class CustomSelect {
  constructor(select) {
    this.select = select;
    this.name = select.dataset.type;
    // ================ plugin options ======================
    this.parameters = {
      panelItem: {
        position: 'top',
        item: '<input type="text" class="js-search" placeholder="" />'
      }
    };
    // ================ plugin options ======================
  }

  // ================ select elements ======================
  get wrap() {
    return this.select.parentNode;
  }
  get opener() {
    return this.wrap.querySelector('.custom-select__opener');
  }
  get panel() {
    return this.wrap.querySelector('.custom-select__panel');
  }
  get input() {
    return this.wrap.querySelector('.js-search');
  }
  get options() {
    return [].slice.call(this.wrap.querySelectorAll('.custom-select__option'));
  }
  // ================ select elements ======================

  init() {
    // ================ plugin initialization ======================
    this.Select = new Select(this.select, this.parameters);
    this.Select.init();
    // ================ plugin initialization ======================

    // ================ helpers ======================
    addSelectsPlaceholder.call(this);
    filterSearch.call(this);
    // ================ helpers ======================
  }
}

// ================ main initialization ======================
export default function setSelects() {
  const selects = [].slice.call(document.querySelectorAll('.js-select'));
  if (!selects.length) return;


  selects.forEach(select => {
    const customSelect = new CustomSelect(select);
    customSelect.init();
  });
};
// ================ main initialization ======================
