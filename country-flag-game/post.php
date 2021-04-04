<!DOCTYPE html>
<html>
<head>
	<?php
		include_once('./connectdb.php');
	?>
	<!-- 
		 Ajoy Kumar
		 
		 Ernesto Louis

	 -->
	<title>Around The World</title>

	<!-- TITLE ICON -->
	<link rel="shortcut icon" type="image/x-icon" href="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60">
	
	<!-- POST CSS -->
	<link rel="stylesheet" type="text/css" href="post.css">
	
</head>
<body id="body">

	<?php
		
	?>

	<h1 id="h1">THANK YOU FOR PLAYING!!!</h1>

	<script type="text/javascript">

		let blasOffCount = 4;
		setTimeout('runBlastOff()', 200);
		let interval;
		function runBlastOff(){

			interval = setInterval('blastOff()', 1000);
		}

		function blastOff(){
			let h1 = document.getElementById('h1');

			if(blasOffCount > 1){

				h1.innerHTML = `BLAST OFF IN ${blasOffCount-=1} !!!`
			}else{
				
				clearInterval(interval);
				window.location.href = './p2.php';
			}	
		}

	</script>

</body>
</html>