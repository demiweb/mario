import Select from 'select-custom';
import addSelectsPlaceholder from './addPlaceholder';
 
class CustomSelect {
  constructor(select) {
    this.select = select;
    this.name = select.dataset.type;
    // ================ plugin options ======================
    this.parameters = {
      default: {}
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
  // ================ select elements ======================

  init() {
    // ================ plugin initialization ======================
    this.Select = new Select(this.select, this.parameters[this.name]);
    this.Select.init();
    // ================ plugin initialization ======================

    // ================ helpers ======================
    addSelectsPlaceholder.call(this);
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
