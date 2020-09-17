<?php 

	header('Access-Control-Allow-Origin: *');
	
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

	require 'bbdd/conexion.php';

	$peliculas= array();

	$sql = "SELECT * FROM peliculas;";

	$result=mysqli_query($conexion, $sql) or die(mysqli_error($conexion));

	while ($row=mysqli_fetch_assoc($result)) {
		array_push($peliculas, array('titulo'=>$row['titulo'], 'año'=>$row['año']));
	}
	
	echo json_encode($peliculas);

?>