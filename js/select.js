export const select = () => {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item =>  {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item =>  {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    let img = this.getElementsByTagName('img')[0]?.src
    let select = this.closest('.select');
    let currentText = select.querySelector('.select__current');
    let currentImg = select.querySelector('.header__select--icon')

    if (img) {
      currentImg.src = img;
    }

    currentText.innerText = text;
    select.classList.remove('is-active');
  }

  window.addEventListener('click', (e) => {
    const el = document.querySelector('.is-active');

    for (const select of document.querySelectorAll('.select')) {
      if (!select.contains(e.target)) {
        select.classList.remove('is-active');
      }
    }
  });
};

