<?php
$ekey = $_POST['key'];

if ($key == "1234") {
    session_start();
    if ($_SESSION['permLvl'] == 5) {
        header('Location: dashboard.php', true, false ? 301 : 302);
        exit();
    }
    echo "success";
} else {
    echo "error";
}
