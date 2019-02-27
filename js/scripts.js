$(function(){

var form_login = document.getElementById("login-form");
form_login.onsubmit = function(e) {
  e.preventDefault();
  $("#checkbox").on("change", function() {
    if ($(this).is(":checked")) {
      $(this).attr("value", "true");
    } else {
      $(this).attr("value", "false");
    }

    $("#checkbox-value").text($("#checkbox").val());
  });
  var email = form_login.email.value;
  var pass = form_login.pass.value;
  var check = form_login.chkRem.value;
  var hash = CryptoJS.SHA1(pass);
  var passhash = CryptoJS.enc.Hex.stringify(hash);
  $.ajax({
    type: "POST",
    url: "/api/user/login",
    data: {
      email: email,
      password: passhash,
      remember_me: check
    },
    success: function(msg) {
      console.log(msg);
    },
    fail: function() {
      console.log("login failed");
    }
  });
};

});