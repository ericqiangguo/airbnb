var form_signup = document.getElementById('signup-form');


form_signup.onsubmit=function(e)
{
    e.preventDefault();

    var email=form_signup.email.value;
    var pass=form_login.pass.value;
    var checkPass=form_login.checkPass.value;

    console.log(email);
    console.log(pass);
    console.log(checkPass);

    $.ajax({
        type: "POST",
        url: "",
        data:
            {
                username:email,
                password:pass,
                checkPassword:checkPass
            },
        success: function(msg)
        {
            console.log(msg);
        },
        fail: function()
        {
            console.log("signup failed");
        }
    });


}// Empty JS for your own code to be here