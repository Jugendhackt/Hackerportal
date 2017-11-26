<?php

require_once 'config.php';

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$databasename", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch(PDOException $ex){
    echo $ex->getMessage();
}

if($_POST && isset($_POST)){
	$action = $_POST['action'];
	$data = Array();
	if(!empty($_POST['data'])){
	    $data = $_POST['data'];
	}
	switch($action){
		case "create":
	    	echo createArticle($data['title'], $data['author'], $data['content']);
	        die();
	    case "edit":
	    	echo editArticle($data['title'], $data['author'], $data['content']);
	    	die();
	    case "getContent":
	        echo getContent($data['id']);
	        die();
	    case "getAuthor":
	    	echo getAuthor(($data['id']));
	    	die();
	   	case "getTitle":
	   		echo getTitle(($data['id']));
	   		die();
	   	case "getEditDate":
	   		echo getEditDate(($data['id']));
	   		die();
	   	case "getArticleCount":
	   		echo getArticleCount();
	   		die();
	   	case "getArticles":
	   		print_r(getArticles($data['amount']));
	   		die();
	   	case "getAllArticles":
	   		print_r(getAllArticles());
	   		die();
	}
}

function editArticle($title, $content, $id){
	global $pdo;
	$val = $pdo->query("SELECT * FROM articles WHERE ID = '$id'");
	if($val && isset($val)){
		$pdo->exec("UPDATE articles SET Title = '$title', Content = '$content', EditDate = '".date('Y-m-d H:i:s')."' WHERE ID = '$id'");
	}
}

function createArticle($title, $author, $content){
	global $pdo;
	$stmt = $pdo->prepare("INSERT INTO articles (Title, Author, EditDate, Content) VALUES (?, ?, ?, ?)");
	$pdo->beginTransaction();
	$stmt->execute(array($title, $author, date('Y-m-d H:i:s'), $content));
	$id = $pdo->lastInsertId();
	$pdo->commit();
	return $id;
}

function getTitle($id){
	global $pdo;
	return $pdo->query("SELECT Title FROM articles WHERE ID = '$id'")->fetchColumn();
}

function getAuthor($id){
	global $pdo;
	return $pdo->query("SELECT Author FROM articles WHERE ID = '$id'")->fetchColumn();
}

function getEditDate($id){
	global $pdo;
	return $pdo->query("SELECT EditDate FROM articles WHERE ID = '$id'")->fetchColumn();
}

function getContent($id){
	global $pdo;
	return $pdo->query("SELECT Content FROM articles WHERE ID = '$id'")->fetchColumn();
}

function getArticles($amount){
	global $pdo;
	return json_encode($pdo->query("SELECT ID FROM articles LIMIT $amount")->fetchAll(PDO::FETCH_COLUMN, 0));
}

function getAllArticles(){
	global $pdo;
	return json_encode($pdo->query("SELECT ID FROM articles")->fetchAll(PDO::FETCH_COLUMN, 0));
}

function getArticleCount(){
	global $pdo;
	$table = $pdo->query("SELECT * FROM articles")->fetchAll();
	return count($table);
}

?>