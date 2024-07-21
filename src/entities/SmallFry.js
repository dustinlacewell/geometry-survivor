import { Enemy } from "./Enemy";

export class SmallFry extends Enemy {
    
  constructor(player, x, y) {
    super(player, x, y, 
        3, // hp 
        25, // radius
        'red', // color
        0.65, // move speed
        500, // attackSpeedMs
        100, // score
    );
  }
}