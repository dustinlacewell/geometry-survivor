import { ctx } from "../utils/canvas";
import { throttle } from "../utils/throttle";

export class Enemy {
  constructor(player, x, y, hp, radius, color, speed, attackSpeedMs, score) {
    this.player = player;

    // starting position
    this.x = x;
    this.y = y;

    // size
    this.maxRadius = radius;
    this.radius = radius;

    // other properties
    this.baseColor = color;
    this.color = color;
    this.speed = speed;
    this.damageCooldownMs = attackSpeedMs;
    this.maxhp = hp;
    this.hp = hp;
    this.score = score;

    this.damageThrottle = throttle(this.damageCooldownMs, (damage) => {
      this.player.takeDamage(damage);
    });
  }
  takeDamage(damage) {
    // reduce hp
    this.hp -= damage;

    // make smaller
    const ratio = Math.abs(this.hp / this.maxhp);
    this.radius = this.maxRadius * ratio;

    // enemy death check
    if (this.hp <= 0) {
      this.player.score += this.score;
      console.log(`One Enemy Killed, score=${this.player.score}`);
    }
  }
  update() {
    // move toward box
    const [cx, cy] = this.player.center;
    if (this.x < cx) {
      this.x += this.speed;
    }
    if (this.x > cx) {
      this.x -= this.speed;
    }
    if (this.y < cy) {
      this.y += this.speed;
    }
    if (this.y > cy) {
      this.y -= this.speed;
    }

    // Enemy-Player collision detection!
    const distance = Math.sqrt(
      Math.pow(this.x - cx, 2) + Math.pow(this.y - cy, 2)
    );

    // a^2 + b^2 = c^2
    if (distance < this.radius + (this.player.width + this.player.height) / 4) {
      this.damageThrottle(1);
      this.color = "blue";
    } else {
      this.color = this.baseColor;
    }
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
