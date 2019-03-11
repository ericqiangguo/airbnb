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
  if(email=='')
  {
    document.getElementById("reminder_username").innerHTML="please enter your email";
  }
  var pass = form_login.pass.value;
  if(pass=='')
  {
    document.getElementById("reminder_password").innerHTML="please enter your password";
  }
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
      window.location.href='../homepage.html';
    },
    fail: function() {
      console.log("login failed");
    }
  });
};

});