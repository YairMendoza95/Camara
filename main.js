;(function() {
	var camara = new Camara('video', 'canvas', function(){
		var btnDownload = document.getElementById('snap')
		btnDownload.addEventListener("click", function(){
			var imagenURL = canvas.toDataURL("image/png")
			var link = document.getElementById('link-download')
			link.href = imagenURL
			link.download = "photo.png"
			link.click()
		})
	})
})()