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
		this.angle = 0;

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

		// Set speed to zero at some point 
		if(Math.abs(this.speed) < this.friction) {
			this.speed = 0;
		}
		

		// adding friction
		if(this.speed) {
			const flip = (this.speed > 0) ? 1 : -1;
			
			(this.speed > 0) ? (this.speed -= this.friction) : (this.speed += this.friction);

			if(this.controls.left) {
				this.angle += 0.03 * flip;
			}
	
			if(this.controls.right) {
				this.angle -= 0.03 * flip;
			}

		}
		
		this.x -= Math.sin(this.angle) * this.speed;
		this.y -= Math.cos(this.angle) * this.speed;
	}

	draw(ctx) {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(-this.angle);

		ctx.beginPath();
		ctx.rect(
			-this.width/2,
			-this.height/2,
			this.width,
			this.height
		);

		ctx.fill();
		ctx.restore();
	}
}