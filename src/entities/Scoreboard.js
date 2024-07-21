import { ctx, canvas } from "../utils/canvas";
export class Scoreboard {
  constructor(player) {
    this.player = player;
  }

  update() {}

  draw() {
    const message = `${this.player.score}`;
    ctx.save();

    ctx.font = "48px Arial";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "white";
    const metrics = ctx.measureText(message);
    const x = canvas.width / 2 - metrics.width / 2;
    const y = 105;
    ctx.fillText(message, x, y);
    ctx.strokeText(message, x, y);

    ctx.restore();
  }
}
