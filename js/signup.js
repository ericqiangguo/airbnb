var form_login = document.getElementById("login-form");
form_login.onsubmit = function(e) {
  e.preventDefault();
  var email = form_login.email.value;
  var pass = form_login.pass.value;
  var hash = CryptoJS.SHA1(pass);
  var passhash = CryptoJS.enc.Hex.stringify(hash);
  $.ajax({
    type: "POST",
    url: "https://soy-sauce.herokuapp.com/user/register",
    data: {
      email: email,
      password: passhash
    },
    success: function(msg) {
      console.log(msg);
    },
    fail: function() {
      console.log("login failed");
    }
  });
};

function checkpwd() {
  var check = false;
  var password = document.getElementById("exampleInputPassword1").value;
  if (password.length < 6) {
    document.getElementById("checktext1").innerHTML = "  × less than 6 digits";
    check = false;
  } else {
    document.getElementById("checktext1").innerHTML = "  √";
    check = true;
  }
  return check;
}
function checkpwdc() {
  var check = false;
  var password = document.getElementById("exampleInputPassword1").value;
  var pwdc = document.getElementById("exampleInputPassword2").value;
  if (password != pwdc) {
    document.getElementById("checktext2").innerHTML =
      "  × must mach the previous entry";
    check = false;
  } else {
    document.getElementById("checktext2").innerHTML = "  √";
    check = true;
  }
  return check;
}

function check() {
  var check = checkpwd() && checkpwdc();
  return check;
}
