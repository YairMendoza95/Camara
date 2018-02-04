;(function() {
	// Para acceder al hardware primero se evalua si propiedad getUserMedia esta disponible

	// La doble negación convierte lo que sea que reciba a booleano
	if(!!(navigator.getUserMedia || navigator.webkitGetUserMedia)){
		// Tenemos un navegador moderno que lo soporta
		
		//
		navigator.webkitGetUserMedia({video: true}, function(localMediaStream){
			// Esta funcion se activa cuando el usuario autoriza el uso de la cámara y cargue la imagen de la cámara
			document.getElementById('video').src = window.URL.createObjectURL(localMediaStream)
		}, function(error){
			console.log(error);
		})
	}
	else{
		alert("No lo soporta");
	}
})()