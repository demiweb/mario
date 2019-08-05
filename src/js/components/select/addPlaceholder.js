export default function addSelectsPlaceholder() {
  const HAS_PLACEHOLDER = 'has-placeholder';
  // let placeholder;

  [].slice.call(this.select.options).forEach(option => {
    if (option.value === 'placeholder' && option.selected) {
      // placeholder = option.innerText;
      this.wrap.classList.add(HAS_PLACEHOLDER);
    }
  });

  this.select.addEventListener('change', e => {
    if (e.currentTarget.value !== 'placeholder') {
      this.wrap.classList.remove(HAS_PLACEHOLDER);
    };
  });
};
