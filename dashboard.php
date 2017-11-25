<!DOCTYPE html>

<html lang="de">

	<head>
		<title>Hackerportal - Dashboard</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width = device-width, initial-scale = 1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<script src="https://use.fontawesome.com/4e14f8df98.js"></script>
  		<link rel="stylesheet" href="style.css">
	</head>

	<body>

		<div id="main">
			<div class="container-fluid">
				<div class="row content">
					<div class="col-sm-3 sidenav">
						<h4>Hackerportal</h4>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search Articles..">
							<span class="input-group-btn">
								<button class="btn btn-default" type="button">
									<span class="glyphicon glyphicon-search"></span>
								</button>
							</span>
						</div><br>
						<ul class="nav nav-pills nav-stacked">
							<li class="active"><a href="#section1">Home</a></li>
							<li><a href="#section2">Friends</a></li>
							<li><a href="#section3">Family</a></li>
							<li><a href="#section3">Photos</a></li>
							<li><a id="logoutBtn" href="#">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
						</ul>
					</div>
				</div>
				<div class="col-sm-9">

				</div>
			</div>

		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<script src="dash.js"></script>
		<script src="articles.js"></script>
	</body>

</html>


<?php
	session_start();
	if(!isset($_SESSION['permLvl']) || $_SESSION['permLvl'] < 1){
		header('Location: index.php', true, false ? 301 : 302);
    	exit();
	}
	require_once 'install.php';
?>
