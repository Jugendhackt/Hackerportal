<?php
try {
    $dbh = new PDO('mysql:host=localhost;dbname=test', 'test', 'testsqllaptop01login220', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
} catch (PDOException $e) {
    $error = 'Verbindung fehlgeschlagen: ' . $e->getMessage();
}

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$password = $_POST["password"];

$hash = password_hash($password, PASSWORD_DEFAULT);

$stmt = $dbh->prepare("insert into users set fname=?, lname=?, email=?, password=?");
$stmt->execute([$fname, $lname, $email, $hash]);
if($stmt->errorCode() == 0) {
    echo "success";
}else{
    echo "error";
}
?>
