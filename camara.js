class Camara{
	constructor(video_id, canvas_id, callback){
		if(!this.idBrowserValid()) return // Si el navegador no es válido retorna vacío sin iniciar nada y termina la ejecución

		// Se obtiene el id del control para el video y en el atributo src se asigna la URL del video obtenido
		this.video = document.getElementById(video_id)
		this.canvas = document.getElementById(canvas_id)
		this.contexto = this.canvas.getContext('2d') // El contexto es el objeto que tienen los métodos que nos permiten dibujar 
		this.sticker = null
		this.camaras = []

		navigator.mediaDevices.enumerateDevices().then((devices)=>{
			//console.log(devices)
			devices.forEach((device)=> {
				if(device.kind == 'videoinput')	
					console.log(device.deviceId + " - " + device.label)
					this.camaras.push(device)
			})
		})

		navigator.webkitGetUserMedia(this.constrains(), (localMediaStream)=>{
			this.setVideo(localMediaStream)
			this.setCanvas()
			callback()
		}, function (error) {
			console.log(error)
		})
	}

	snap(){
		this.video.pause()
	}

	unSnap(){
		this.video.play()
		this.sticker = null
	}

	setVideo(localMediaStream){
		this.video.src = window.URL.createObjectURL(localMediaStream)
	}

	setCanvas(){
		video.addEventListener("play", (ev)=> this.loop())
	}

	loop(){
		if(this.video.paused || this.video.ended) return

		this.draw()
		setTimeout(()=> this.loop(), 1000/30)
	}

	draw(){
		this.contexto.drawImage(this.video, 0, 0)
		if(this.sticker != null)
			this.contexto.drawImage(this.sticker, 20, 20, 90, 90
				)
	} 

	addSticker(img){
		this.sticker = img
		this.draw()
	}
	idBrowserValid(){
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia) // La doble negación convierte lo que sea que reciba a boolean
	}

	constrains(){
		return {
			video: {
				optional: [{
					sourceId: "7f5b3308a8461955e64a9fdda33184099aff831d9c56ba3cf03956649f8f3727"
				}]
			}
		}
	}
}