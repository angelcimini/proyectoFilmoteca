<?php
	$conexion = mysqli_connect('localhost', 'root', '', 'filmoteca');
	// if (isset($conexion)){
	// 	echo 'DB is connected';
	// }
	// or die ("hubo un error al conectar con la base de datos");

	//juego de caracteres a utilizar en la conexión
	mysqli_set_charset($conexion, "utf8");
?>