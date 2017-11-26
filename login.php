<?php
$key = $_POST['key'];

if ($key == "1234") {
    session_start();
    $_SESSION['permLvl'] == 5;
    echo "success";
} else {
    echo "error";
}
