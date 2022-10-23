const red = '#34F458';
const green = '#F90A0A';

export const validation = function() {
  $("#formName").on('input', function() {
    checkName();
  });
  $("#formSurname").on('input', function() {
    checkSurname();
  });
  $("#formEmail").on('input', function() {
    checkEmail();
  });
  $("#formPhone").on('input', function() {
    checkPhone();
  });
  $("#formCard").on('input', function() {
    checkCard();
  });
  $("#formCode").on('input', function() {
    checkCode();
  });

  function checkName() {
    const pattern = /^[a-zA-Z]*$/;
    const name = $("#formName").val();

    if (pattern.test(name) && name !== '') {
      $("#formName").css("border", "1px solid green");
      return true;
    } else {
      $("#formName").css("border", "1px solid red");
      return false;
    }
  }

  function checkSurname() {
    const pattern = /^[a-zA-Z]*$/;
    const surName = $("#formSurname").val()

    if (pattern.test(surName) && surName !== '') {
      $("#formSurname").css("border","1px solid green");
      return true;
    } else {
      $("#formSurname").css("border","1px solid red");
      return false;
    }
  }

  function checkEmail() {
    const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const email = $("#formEmail").val();

    if (pattern.test(email) && email !== '') {
      $("#formEmail").css("border","1px solid green");
      return true;
    } else {
      $("#formEmail").css("border","1px solid red");
      return false;
    }
  }

  function checkPhone() {
    const phone = $("#formPhone").val();

    if (+phone) {
      $("#formPhone").css("border","1px solid green");
      return true;
    } else {
      $("#formPhone").css("border","1px solid red");
      return false;
    }
  }

  function checkCard() {
    const card = $("#formCard").val();

    if (+card) {
      $("#formCard").css("border", "1px solid green");
      return true;
    } else {
      $("#formCard").css("border", "1px solid red");
      return false;
    }
  }

  function checkCode() {
    const code = $("#formCode").val();

    if (+code) {
      $("#formCode").css("border","1px solid green");
      return true;
    } else {
      $("#formCode").css("border","1px solid red");
      return false;
    }
  }

  $("#billingForm").submit(function(e) {
    const name = checkName();
    const surname = checkSurname();
    const email = checkEmail();
    const phone = checkPhone();
    const card = checkCard();
    const code = checkCode();

    if (!name || !surname || !email || !phone || !card || !code) {
      e.preventDefault();
    }
  });
};
