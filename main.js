;(()=>{
	var camara = new Camara('video', 'canvas', function(){
		var btnSnap = document.getElementById('snap')
		var btnCancel = document.getElementById('cancel')
		var btnSticker = document.getElementById('sticker')
		var btnDownload = document.getElementById('download')

		document.querySelectorAll('.stickers').forEach(function(el){
			el.addEventListener("click", addSticker)
		})

		btnSnap.addEventListener("click", function(){
			camara.snap()
			document.getElementById('actions').style.display = 'block'
		})

		btnDownload.addEventListener("click",()=>{
			var imagenURL = camara.canvas.toDataURL("image/png")
			var link = document.getElementById('link-download')
			link.href = imagenURL
			link.download = "photo.png"
			link.click()
		})

		btnCancel.addEventListener("click", ()=>{
			camara.unSnap()
			document.getElementById('actions').style.display = 'none'	
		})
		btnSticker.addEventListener("click", function(){
			document.getElementById('stickers').style.display = 'block'	
		})

		function addSticker(){
			camara.addSticker(this)
			document.getElementById('stickers').style.display = 'none'	
		}
	})
})()