<?php
$email = $_POST['email'];
$password = $_POST['password'];

$dbh = new PDO('mysql:host=10.23.41.183;dbname=hackerportal', 'root', 'mysqlpi01');

$sth = $dbh->prepare("SELECT * FROM users WHERE email=?");
$sth->execute([$email]);


if($sth->errorCode() == 0) {
    $user = $sth->fetch();
    if ($user !== false) {
        if (password_verify($password, $user['password'])) {
            session_start();
            	if($_SESSION['permLvl'] == 5){
            		header('Location: dashboard.php', true, false ? 301 : 302);
                	exit();
            	}
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
