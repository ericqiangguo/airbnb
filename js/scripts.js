var form_login = document.getElementById('login-form');

form_login.onsubmit = function (e) {
    e.preventDefault();
    $("#checkbox").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
        } else {
            $(this).attr('value', 'false');
        }

        $('#checkbox-value').text($('#checkbox').val());
    });
    var email = form_login.email.value;
    var pass = form_login.pass.value;
    var check = form_login.chkRem.value;
    var passhash = CryptoJS.MD5(pass).toString();
    var remember = false;

    console.log(email);
    console.log(passhash);
    console.log(check);

    if (check) {
        setCookie("username", email, 1);
    }

    $.ajax({
        type: "POST",
        url: "https://soy-sauce.herokuapp.com/user/login",
        data:
            {
                email: email,
                password: passhash,
                remember_me: remember
            },
        success: function (msg) {
            console.log(msg);
        },
        fail: function () {
            console.log("login failed");
        }
    });


}
window.onload = checkCookie();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "," + expires;
    alert(document.cookie);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(',');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    console.log(user);
    if (user != "") {

        $.ajax({
            type: "GET",
            url: "https://soy-sauce.herokuapp.com/user/check_login?user",
            success: function (msg) {
                console.log(msg);
            },
            fail: function () {
                console.log("login failed");
            }
        });
    }
}