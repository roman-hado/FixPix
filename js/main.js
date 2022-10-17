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
