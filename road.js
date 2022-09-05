class Road {
	constructor(x, width, laneCount = 3) {
		this.x =  x;
		this.width = width;
		this.laneCount = laneCount;

		this.left = x - width/2;
		this.right = x + width/2;

		const infinity = 1000000000;
		this.top = -infinity;
		this.bottom = infinity;
	}

	draw(ctx) {
		ctx.lineWidth = 5;
		ctx.strokeStyle = "white";
		ctx.setLineDash([]);

		for (let i = 0; i <= this.laneCount; i++) {
			// Linear interpolation of 2 points + procent 
			const x = lerp(this.left, this.right, i/this.laneCount);
			if (i === 2){
				ctx.setLineDash([20,20]);
			} else {
			ctx.setLineDash([]);
			}
			ctx.beginPath();
         ctx.moveTo(x, this.top);
         ctx.lineTo(x, this.bottom);
         ctx.stroke();
			// Draw line
		}
	}
}

