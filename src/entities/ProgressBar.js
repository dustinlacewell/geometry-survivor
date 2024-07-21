const defaults = {
  borderColor: "gray",
  fillColor: "red",
};

export class ProgressBar {
  constructor(ctx, x, y, width, height, percent, options) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.percent = Math.min(1, Math.max(0, percent));

    let { borderColor, fillColor } = {
      ...defaults,
      ...(options || {}),
    };

    this.borderColor = borderColor;
    this.fillColor = fillColor;
  }

  update() {}

  draw() {
    const ctx = this.ctx;
    ctx.save();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width * this.percent, this.height, 5);
    ctx.fill();

    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width, this.height, 5);
    ctx.stroke();

    ctx.restore();
  }
}
