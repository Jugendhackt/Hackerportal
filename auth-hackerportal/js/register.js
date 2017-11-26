$(function() {
    $("input").not("[type=submit]").jqBootstrapValidation();
});
$("#registerForm").submit(function(event) {

    event.preventDefault();

    var $form = $(this),
        url = $form.attr('action');

    var posting = $.post(url, {
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        email: $('#email').val(),
        password: $('#password').val()
    });

    posting.done(function(data) {
        $('#exampleModal').modal('show');
        if (data == "success"){
            document.getElementById("exampleModalLabel").innerHTML = "Success";
            document.getElementById("exampleModalBody").innerHTML = "You can now login and start.";
        }else{
            document.getElementById("exampleModalLabel").innerHTML = "Something wrent wrong...";
            document.getElementById("exampleModalBody").innerHTML = "An error occurred while communicating with the database. You can try again to register.";
        }
    });
    posting.fail(function() {
        $('#exampleModal').modal('show');
        document.getElementById("exampleModalLabel").innerHTML = "Something wrent wrong...";
        document.getElementById("exampleModalBody").innerHTML = "An error occurred with you device/browser. You can try again to register.";
})
});
