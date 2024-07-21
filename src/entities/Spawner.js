import { canvas } from "../utils/canvas";
import { throttle } from "../utils/throttle";
import { SmallFry } from "./SmallFry";
import { Boss } from "./Boss";

export class Spawner {
  constructor(player, entities) {
    this.player = player;
    this.entities = entities;
    this.waveSize = 4;
    this.delayMs = 7000;
    this.bossDelayMs = 60000;

    this.spawnWaveThrottle = throttle(this.delayMs, (entities) => {
      // spawn one wave enemies
      for (var i = 0; i < this.waveSize; i++) {
        // where do they spawn?  top edge of map for now
        const angle = Math.random() * 2 * Math.PI;
        const distance =
          Math.sqrt(
            Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2),
          ) + 100;

        const x = canvas.width / 2 + distance * Math.cos(angle);
        const y = canvas.height / 2 + distance * Math.sin(angle);

        entities.push(new SmallFry(this.player, x, y));
      }
    });

    // boss throttle

    this.spawnBossThrottle = throttle(this.bossDelayMs, (entities) => {
      // where do they spawn?  top edge of map for now
      const angle = Math.random() * 2 * Math.PI;
      const distance =
        Math.sqrt(
          Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2),
        ) + 100;

      const x = canvas.width / 2 + distance * Math.cos(angle);
      const y = canvas.height / 2 + distance * Math.sin(angle);

      entities.push(new Boss(this.player, x, y));
    });
  }

  update() {
    this.spawnWaveThrottle(this.entities);
    this.spawnBossThrottle(this.entities);
  }

  draw() {}
}
