$(document).ready(function() {
  $("#billingForm").validate({
    errorClass: "error error-alert",
    validClass: "valid valid-alert",
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      lastName: {
        required: true,
        minlength: 2
      },
      eMail: {
        required: true,
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      },
      tel: {
        required: true,
        number: true,
        minlength: 6,
        maxlength: 10
      },
      cardNumber: {
        required: true,
        number: true,
        minlength: 8
      },
      securityCode: {
        required: true,
        number: true
      }
    },
    messages: {
      name: "",
      lastName: "",
      eMail: "",
      tel: "",
      securityCode: "",
      cardNumber: ""
    },

    submitHandler: function(form) {
      form.submit();
    }
  });
});

let select = function() {
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

select();
