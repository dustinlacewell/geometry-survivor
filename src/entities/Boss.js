import { Enemy } from "./Enemy";

export class Boss extends Enemy {
  constructor(player, x, y) {
    super(
      player,
      x,
      y,
      30, // hp
      50, // radius
      "pink", // color
      0.85, // move speed
      100, // attackSpeedMs
      1000, // score
    );
  }
}
