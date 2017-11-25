<!DOCTYPE html>

<html lang="de">

	<head>
		<title>Hackerportal - Dashboard</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width = device-width, initial-scale = 1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
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
						<ul class="nav nav-pills flex-column">
							<li class="nav-item"><a class="nav-link active" href="#section1">Home</a></li>
							<li class="nav-item"><a class="nav-link" href="#section2">Friends</a></li>
							<li class="nav-item"><a class="nav-link" href="#section3">Family</a></li>
							<li class="nav-item"><a class="nav-link" href="#section3">Photos</a></li>
							<li class="nav-item"><a class="nav-link" id="logoutBtn" href="#">Logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>
						</ul>
					</div>
					<div class="col-sm-9" id="dash-blog" style="float:right">
						
					</div>
				</div>
			</div>

		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
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
