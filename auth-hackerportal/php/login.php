<?php
$email = $_POST['email'];
$password = $_POST['password'];

$dbh = new PDO('mysql:host=localhost;dbname=test', 'test', 'testsqllaptop01login220');

$sth = $dbh->prepare("SELECT * FROM users WHERE email=?");
$sth->execute([$email]);


if($sth->errorCode() == 0) {
    $user = $sth->fetch();
    if ($user !== false) {
        if (password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['userid'] = $user['id'];
            echo "success";
        }else{
            echo "error";
        }
    }else{
        echo "error2";
    }
}else{
    echo "error3";
}
?>
