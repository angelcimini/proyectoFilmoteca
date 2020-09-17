
 function añadirPelicula (){
	let titulo = document.getElementById('titulo').value.trim();
 	let año = document.getElementById('año').value.trim();

 	let url = 'src/servicios/alta.php';

 	let datos = new FormData()
 	datos.append('titulo', titulo);
 	datos.append('año', año);

 	let parametros = {
 		method: 'post',
 		body: datos
 	}

 	fetch(url, parametros)
 	.then(function(respuesta){
 		if(respuesta.ok){
 			return respuesta.json();
 		} else {
 			console.log(respuesta);
 			throw 'Error en el alta de la pelicula';
 		}
 	})
 	.then(function(resultado) {
		//alert(resultado[1])
		alert(resultado)
		//console.log(resultado)
		if (resultado[0]=='00') {
			//limpiar el formulario
			document.getElementById('formulario').reset()
		} 
	})
 	.catch(function(error) {
		alert(error)
	})
 }