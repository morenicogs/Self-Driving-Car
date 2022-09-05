class Car{
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;

		this.width = width;
		this.height = height;

		this.speed = 0;
		this.maxSpeed = 3;

		this.acceleration = 0.2;
		this.friction = 0.05;

		this.controls = new Controls();
	}

	update() {

		if(this.controls.forward) {
			this.speed += this.acceleration;
			this.speed = Math.min(this.maxSpeed, this.speed);
		}

		if(this.controls.reverse) {
			this.speed -= this.acceleration;
			this.speed = Math.max(-this.maxSpeed/2, this.speed);
		}

		if(this.controls.left) {
			this.x -= 2;
		}

		if(this.controls.right) {
			this.x += 2;
		}

		// adding friction
		if(this.speed) {
			(this.speed > 0) ? (this.speed -= this.friction) : (this.speed += this.friction);
		}

		if(Math.abs(this.speed) < this.friction) {
			this.speed = 0;
		}
		this.y -= this.speed;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.rect(
			this.x - this.width/2,
			this.y - this.height/2,
			this.width,
			this.height
		);

		ctx.fill();
	}
}