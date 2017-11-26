<?php
session_start();
if (!isset($_SESSION['userid'])) {
    header("location: login.html");
}
$email = $_REQUEST["value"];

$dbh = new PDO('mysql:host=localhost;dbname=test', 'test', 'testsqllaptop01login220');

$sth = $dbh->prepare("SELECT email FROM users WHERE email=?");
$sth->execute([$email]);

if( $sth->rowCount() == 0 ) {
     $valid = 1;
     $message = "";
}else{
    $valid = 0;
    $message = "Email already in use";
}
echo json_encode(
  array(
    "value" => $_REQUEST["value"],
    "valid" => $valid,
    "message" => $message
  )
);
?>
