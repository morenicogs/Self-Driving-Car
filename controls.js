class Controls {
	constructor(){
		this.forward = false;
		this.left = false;
		this.right = false;
		this.reverse = false;

		this.#addKeyboardListeners();
	}

	#addKeyboardListeners() {
		document.onkeydown = (event) => {
			if(event.key === "ArrowLeft") {
				this.left = true;
			}
			if(event.key === "ArrowRight") {
				this.right = true;
			}
			if(event.key === "ArrowUp") {
				this.forward = true;
			}
			if(event.key === "ArrowDown") {
				this.reverse = true;
			}

		}
		document.onkeyup = (event) => {
			if(event.key === "ArrowLeft") {
				this.left = false;
			}
			if(event.key === "ArrowRight") {
				this.right = false;
			}
			if(event.key === "ArrowUp") {
				this.forward = false;
			}
			if(event.key === "ArrowDown") {
				this.reverse = false;
			}
		}
	}
}