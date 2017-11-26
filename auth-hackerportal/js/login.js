$(function() {
    $("input").not("[type=submit]").jqBootstrapValidation();
});
$("#loginForm").submit(function(event) {

    event.preventDefault();

    var $form = $(this),
        url = $form.attr('action');

    var posting = $.post(url, {
        email: $('#email').val(),
        password: $('#password').val()
    });

    posting.done(function(data) {
        if (data == "success"){
            window.location.href = "./index.php";
        }else if (data == "error") {
            $('#exampleModal').modal('show');
            document.getElementById("exampleModalLabel").innerHTML = "Unknown Password";
            document.getElementById("exampleModalBody").innerHTML = "You tried to login with a wrong password...";
        }else if (data == "error2") {
            $('#exampleModal').modal('show');
            document.getElementById("exampleModalLabel").innerHTML = "Unknown user...";
            document.getElementById("exampleModalBody").innerHTML = "You tried to login with an email, which is not registered in the database.";
        }else{
            $('#exampleModal').modal('show');
            document.getElementById("exampleModalLabel").innerHTML = "Something wrent wrong...";
            document.getElementById("exampleModalBody").innerHTML = "An error occurred while communicating with the database. You can try again to login.";
        }
    });
    posting.fail(function() {
        $('#exampleModal').modal('show');
        document.getElementById("exampleModalLabel").innerHTML = "Something wrent wrong...";
        document.getElementById("exampleModalBody").innerHTML = "An error occurred with you device/browser. You can try again to login.";
})
});
