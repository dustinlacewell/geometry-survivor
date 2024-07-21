import { Enemy } from "./Enemy";
import { cycle } from "../utils/cycle";

export class Garlic {
  constructor(ctx, player, entities) {
    this.ctx = ctx;
    this.player = player;
    this.entities = entities;
    this.radius = 200;
    this.color = "rgba(255, 255, 255, 0.1)";
    this.damage = 0.01;
  }

  getEnemies() {
    return this.entities.filter((e) => e instanceof Enemy);
  }

  update() {
    const [cx, cy] = this.player.center;

    // if the enemy is too close
    // do damage
    const enemies = this.getEnemies();
    enemies.forEach((enemy) => {
      const distance = Math.sqrt(
        Math.pow(enemy.x - cx, 2) + Math.pow(enemy.y - cy, 2)
      );

      // a^2 + b^2 = c^2
      if (distance < this.radius + enemy.radius) {
        enemy.takeDamage(this.damage);
      }
    });
  }

  draw() {
    const ctx = this.ctx;
    const [cx, cy] = this.player.center;
    ctx.save();
    // draw garlic
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(cx, cy, this.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }
}
