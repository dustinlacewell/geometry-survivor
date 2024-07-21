import { ctx } from "../utils/canvas";
import { canvas } from "../utils/canvas";
import { Player } from "../entities/Player";
import { Enemy } from "../entities/Enemy";
import { HealthBar } from "../entities/HealthBar";
import { Garlic } from "../entities/Garlic";
import { Spawner } from "../entities/Spawner";
import { Scoreboard } from "../entities/Scoreboard";
import { keys } from "../utils/keyboard";

export class Gameplay {
  constructor(setScene) {
    this.setScene = setScene;
    this.entities = [];
    this.player = new Player();
    const spawner = new Spawner(this.player, this.entities);
    const healthbar = new HealthBar(
      this.player,
      ctx,
      100,
      10,
      canvas.width - 200,
      30
    );

    const scoreboard = new Scoreboard(this.player);
    this.player.garlic = new Garlic(ctx, this.player, this.entities);

    this.entities.push(
      healthbar,
      scoreboard,
      this.player,
      this.player.garlic,
      spawner
    );

    this.waiting = false;
  }

  update() {
    if (this.player.hp <= 0) {
      this.waiting = true;
    }

    if (this.waiting) {
      if (keys.space) {
        this.setScene("game");
        keys.space = false;
      }

      return;
    }

    this.entities.forEach((e) => e.update());

    this.entities.splice(
      0,
      this.entities.length,
      ...this.entities.filter((e) => {
        if (e instanceof Enemy && e.hp <= 0) {
          return false;
        }

        return true;
      })
    );
  }

  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.entities.forEach((e) => e.draw());

    if (this.waiting) {
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
    }
  }
}
