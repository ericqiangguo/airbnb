var form_login = document.getElementById('login-form');


form_login.onsubmit=function(e)
{
    e.preventDefault();

    var email=form_login.email.value;
    var pass=form_login.pass.value;

    console.log(email);
    console.log(pass);

    $.ajax({
        type: "POST",
        url: "",
        data:
            {
                username:email,
                password:pass
            },
        success: function(msg)
        {
            console.log(msg);
        },
        fail: function()
        {
            console.log("login failed");
        }
    });


}
