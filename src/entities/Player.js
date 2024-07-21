import { canvas, ctx } from "../utils/canvas";
import { keys } from "../utils/keyboard";

export class Player {
  constructor() {
    // size of box
    this.width = 50;
    this.height = 50;

    // starting position
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 - this.height / 2;

    // other properties
    this.color = "green";
    this.speed = 2;
    this.hp = 5;
    this.score = 0;
    this.angle = 0;
  }

  get center() {
    return [this.x + this.width / 2, this.y + this.height / 2];
  }

  takeDamage(damage) {
    // reduce hp
    this.hp -= damage;

    // game over check
    if (this.hp <= 0) {
      console.log("Game Over");
    }
  }

  move() {
    // move by keys
    // which key is pressed?w
    // move our position in that direction
    if (keys.up) {
      this.y -= this.speed;
      // this.y = this.y - this.speed
    }
    if (keys.down) {
      this.y += this.speed;
    }
    if (keys.right) {
      this.x += this.speed;
    }
    if (keys.left) {
      this.x -= this.speed;
    }
  }

  stayInBounds() {
    if (this.x < 0) {
      // left edge
      this.x = 0;
    }
    if (this.y < 0) {
      // top edge
      this.y = 0;
    }
    if (this.x > canvas.width - this.width) {
      // right edge
      this.x = canvas.width - this.width;
    }
    if (this.y > canvas.height - this.height) {
      // bottom edge
      this.y = canvas.height - this.height;
    }
  }

  update() {
    this.move();
    this.stayInBounds();
    this.angle += Math.PI * 2 * 0.01;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.angle);
    ctx.translate(-this.width / 2, -this.height / 2);
    ctx.strokeStyle = this.color;
    ctx.strokeRect(0, 0, this.width, this.height);
    ctx.restore();
  }
}
