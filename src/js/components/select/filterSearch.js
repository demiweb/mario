export default function filterSearch() {
  if (!this.input) return;

  this.input.addEventListener('input', e => {
    const input = e.currentTarget;
    const filter = input.value.toUpperCase();


    
    if(input.value.length === 0) this.options.forEach(option => option.style.display = '');
    if(input.value.length < 3) return;

    this.wrap.classList.add('is-searching');
    input.disabled = true;

    setTimeout(() => {
      this.options.forEach(option => {
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });

      this.wrap.classList.remove('is-searching');
      input.disabled = false;
      input.focus();
    }, 66);
  });
}
