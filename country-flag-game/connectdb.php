<?php

		$serverName ='localhost';
		$userName = 'root';
		$password = ''; // p@$sw0Rd
		$dbName = 'e_flaggame';


		// CREATE CONNECTION

		$con = mysqli_connect($serverName, $userName, $password, $dbName);

		// IF THERE IS AN ERROR SEND THIS
		
		if(mysqli_connect_errno()){

			echo "Database Connection Not Started";
			exit();

		}else{

			// echo "Database Connection at '$dbName' Has Started <br/>";
		}
	?>