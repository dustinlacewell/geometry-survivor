import { ctx, canvas } from "../utils/canvas";
import { keys } from "../utils/keyboard";

export class MainMenu {
  constructor(setScene) {
    this.setScene = setScene;
  }

  init() {}

  update() {
    if (keys.space) {
      this.setScene("game");
    }
  }

  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const message = "Press SPACE to start.";
    ctx.save();

    ctx.font = "48px Arial";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "white";
    const metrics = ctx.measureText(message);
    const x = canvas.width / 2 - metrics.width / 2;
    const y = canvas.height / 2;
    ctx.fillText(message, x, y);
    ctx.strokeText(message, x, y);

    ctx.restore();
  }
}
