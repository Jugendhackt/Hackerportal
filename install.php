<?php

require_once 'config.php';
require_once 'sqlHelper.php';

//Connect to the database
try {
    $pdo = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch(PDOException $ex){
    echo 'Couldnt create pdo:<br>';
    echo $ex->getMessage();
}

//Creation of The user table
if(!tableExists($pdo, "articles")){
    $pdo->exec("
        CREATE TABLE articles(
        ID INT( 11 ) AUTO_INCREMENT PRIMARY KEY,
        Content TEXT( 50 ) NOT NULL,
        Author VARCHAR( 50 ) NOT NULL,
        EditDate TIMESTAMP( 3 ) NOT NULL,
        Title VARCHAR( 50 ) NOT NULL);
    ");
    //Fill the user table with the entry for the administrator
    //$pdo->exec("INSERT INTO articles (Content, Author, EditDate, Title) VALUES ('Test', 'Test', date('Y-m-d H:i:s'), 'Test')");
}

?>