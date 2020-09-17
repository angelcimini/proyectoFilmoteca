function consultar() {
			var url="src/servicios/consulta.php";
			var parametros = {
				method: 'post',
				mode: 'cors',
				cache: 'no-cache'
			}
			fetch(url, parametros)
			.then(function(respuesta) {
				if (respuesta.ok) {
					return respuesta.json()
				} else {
					console.log(respuesta)
					throw 'error en la petición'
				}
			})
			.then(function(resultado) {
				let pelicula=[];
				for (i in resultado) {
					pelicula+=[`<tr><td>${resultado[i]['titulo']}</td><td>${resultado[i]['año']}</td></tr>`]
				}
				document.getElementById('listado').innerHTML = pelicula
			})
			.catch(function(error) {
				alert(error)
			})
		}