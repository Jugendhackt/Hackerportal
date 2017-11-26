<?php

include_once 'config.php';

/*try {
    $pdo = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch(PDOException $ex){
    echo $ex->getMessage();
}*/

if($_POST && isset($_POST)){
    $action = $_POST['action'];
    $data = Array();
    if(!empty($_POST['data'])){
        $data = $_POST['data'];
    }
    switch($action){
        case "login":
        	login($data['key']);
            die();
        case "logout":
            logout();
            die();
        case "noKey":
        	noKey();
        	die();
    }
}

function noKey(){
	session_start();
	$_SESSION['permLvl'] = 1;
	echo 'Logged in';
}

function login($key) {
	if($key == "1234"){
		session_start();
    	$_SESSION['permLvl'] = 5;
    	echo "Logged in";
	}
}

function logout() {
    if(session_status() == PHP_SESSION_NONE){
        session_start();
    }
    unset($_SESSION['permLvl']);
    session_destroy();
    echo "Logged out";
}

?>