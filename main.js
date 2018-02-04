;(function() {
	// Para acceder al hardware primero se evalua si propiedad getUserMedia esta disponible

	// La doble negación convierte lo que sea que reciba a booleano
	if(!!(navigator.getUserMedia || navigator.webkitGetUserMedia)){
		// Tenemos un navegador moderno que lo soporta
		
		//
		navigator.webkitGetUserMedia({video: true}, function(localMediaStream){
			// Esta funcion se activa cuando el usuario autoriza el uso de la cámara y cargue la imagen de la cámara

			// Se obtiene el id del control para el video y en el atributo src se asigna la URL del video obtenido
			var video = document.getElementById('video')
			video.src = window.URL.createObjectURL(localMediaStream)

			var canvas = document.getElementById('canvas')
			var contexto = canvas.getContext('2d') // El contexto es el objeto que tienen los métodos que nos permiten dibujar 

			var btnDownload = document.getElementById('snap')

			btnDownload.addEventListener("click", function(){
				var imagenURL = canvas.toDataURL("image/png")
				var link = document.getElementById('link-download')

				link.href = imagenURL
				link.download = "photo.png"
				link.click()
			})
			setInterval(function(){
				contexto.drawImage(this.video, 0, 0);
			}, 1000/30)
		}, function(error){
			console.log(error);
		})
	}
	else{
		alert("No lo soporta");
	}
})()