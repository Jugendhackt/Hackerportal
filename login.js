
$("#loginForm").submit(function(event) {

    event.preventDefault();

    var $form = $(this),
        url = $form.attr('action');

    var posting = $.post(url, {
        key: $('#key').val()
    });

    posting.done(function(data) {
        if (data == "success"){
            window.location.href = "dashboard.php";
        }else if (data == "error") {
            $('#exampleModal').modal('show');
            document.getElementById("exampleModalLabel").innerHTML = "Unknown Password";
            document.getElementById("exampleModalBody").innerHTML = "You tried to login with a wrong password...";
        }
    });
    posting.fail(function() {
        $('#exampleModal').modal('show');
        document.getElementById("exampleModalLabel").innerHTML = "Something wrent wrong...";
        document.getElementById("exampleModalBody").innerHTML = "An error occurred with you device/browser. You can try again to login.";
})
});
