<!DOCTYPE html>
<html>
<head>
	<?php
		include_once('./connectdb.php')
	?>
	<!-- 
		 Ajoy Kumar
		 
		 Ernesto Louis

		 version 1.2 .... made the images larger

	 -->
	<title>Around The World</title>

	<!-- TITLE ICON -->
	<link rel="shortcut icon" type="image/x-icon" href="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60">
	
	<!-- MAIN CSS -->
	<link rel="stylesheet" type="text/css" href="p2 css.css">

	<!-- TOGGLE CSS -->
	<link rel="stylesheet" type="text/css" href="toggle.css">
	
</head>
<body id="body" onload="getPic()">

	<label id="toggle" class="toggle" title="Dark Mode">
  		<input type="checkbox" onclick="darkMode()">
  		<span class="slider round"></span>
	</label>
		
	<form id="form" action="post.php" method="post">

	<?php
		print_r("<h1 id='circle'>
					<span id='total' class='total' name='total'></span>
				</h1>");
	?>
		<div id="game">
			<h1 id="title" class="title">
				<span class="world" id="world">&#127758;</span> 
					AROUND THE WORLD! 
				<span class="world" id="world">🌍</span>
			</h1>
	<?php

	// JUST TYR AND COPY THIS CODE...

	
	
		$select = "SELECT name, url FROM e_flags ORDER BY RAND() LIMIT 20"; //  ORDER BY RAND() TAKE OUT TO STOP RANDIMIZATION
		$readFromDb = mysqli_query($con, $select);
		$row = mysqli_fetch_all($readFromDb);

		 $valuesArray = array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);
		// shuffle($valuesArray);
	?>
	<?php
		$x = 1;
		$y=0;
		while($x<=20){
			print_r("<div class='challenges'  id='challenge");
			print_r($x); // INCREMENTS THE CHALLENGE SETS
			print_r("'/>");
			print_r("<img src='");
			print_r($row[$x-1][1]);
			print("' width='300' height='300' alt='");
			print_r($row[$x-1][0]);
			print_r("' />");
			print("<h3 class='statement' id='head");
			print_r($x);
			print_r("'>Choose the country which the flag represents</h3>");
			print_r("<div id='holdButtons'>");
			print_r("<input type='button' class='buttons' id='button1' onclick='chooseCorrect(this)' value='");
			print_r($row[$x-1][0]);
			print_r("'/>");
			if($y === 3){// resets each IF statements's loop counter
				$y = 0;
			}
			if(true){
				shuffle($valuesArray);
				while( $y<=2){ 
					if($row[$valuesArray[$y]][0] == $row[$x-1][0]){// removes any potential duplicates
						print_r("<input type='button' class='buttons' id='button");
						print_r($y+2);
						print_r("' onclick='chooseCorrect(this)' value='");
						print_r($row[$valuesArray[$y+3]][0]);
						print_r("'/>");
					}else{
						print_r("<input type='button' class='buttons' id='button");
						print_r($y+2);
						print_r("' onclick='chooseCorrect(this)' value='");
						print_r($row[$valuesArray[$y]][0]);
						print_r("'/>");
					}
				$y+=1;
				}
			}
			print_r("</div>"); // END OF THE 4 BUTTONS DIV
			print("<div>
						<input type='button' class='showAnswer' value='Show Answer' onclick='showAnswer(this)'>
						<input type='button' class='next' value='Next' onclick='next(this)'>
					</div>"); // END LAST 2 BUTTONS DIV
			print_r("</div>"); // END OF CHALLENGE DIVS

		$x+=1;
		}
	?>

	</div>

	<script type="text/javascript" src="p2 js.js"></script>

</body>
</html>