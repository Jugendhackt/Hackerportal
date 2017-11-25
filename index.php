<!DOCTYPE html>

<html lang="de">

	<head>
		<title>Hackerportal</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width = device-width, initial-scale = 1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<script src="https://use.fontawesome.com/4e14f8df98.js"></script>
  		<link rel="stylesheet" href="style.css">
	</head>

	<body>

		<div id="main">
			<form id="keyForm">
				<input type="password" id="keyInput" placeholder="Key">
				<input type="submit" id="keySubmit" value="Continue">
			</form>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<script src="main.js"></script>
	</body>

</html>

<?php
	session_start();
	if(isset($_SESSION['sid'])){
		echo "Is set";
	}else{
		echo "Is not set";
	}
?>