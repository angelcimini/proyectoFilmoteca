<?php
	$titulo=filter_input(INPUT_POST, 'titulo');
	$año=filter_input(INPUT_POST, 'año');
	
	try {
		$errores = '';
		if (!$titulo) {$errores.="Título obligatorio";}
		if (!$año) {$errores.="Año obligatorio";}
		if ($errores!='') {throw new Exception($errores, 10);}
	}
	catch (Exception $e) {
		$mensaje = $e->getMessage();
		$codigo = $e->getCode();
		$respuesta = [$codigo, $mensaje];
		echo json_encode($respuesta);
		return;
	}
	
	require 'bbdd/conexion.php';


		$sql = "INSERT INTO peliculas VALUES (NULL, '$titulo', '$año')";

		if (mysqli_query($conexion, $sql)) {

		$respuesta = ['00', 'Alta película efectuada'];}
		else {
			if (mysqli_errno($conexion) == 1062) {$respuesta = ['20', 'La película ya existe en la base de datos'];}
			else {$respuesta = ['99', 'Insert 1:'.mysqli_error($conexion)];}
		}

	echo json_encode($respuesta);
?>