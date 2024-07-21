import { ProgressBar } from "./ProgressBar";

export class HealthBar extends ProgressBar {
  constructor(player, ctx, x, y, width, height, percent, options) {
    super(ctx, x, y, width, height, percent, options);
    this.player = player;
  }

  update() {
    this.percent = Math.max(0, Math.min(1, this.player.hp / 5));
  }
}
