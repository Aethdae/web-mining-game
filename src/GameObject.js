import { Vector2 } from "./Vector.js";

export class GameObject {
  constructor(position = new Vector2(0, 0)) {
    position;
    this.hitBox = {
      x: position.X,
      y: position.Y,
      w: position.X + 16,
      h: position.Y + 16,
    };
    this.tile = new Vector2(position.X / 16, position.Y / 16);
  }
  onClick() {
    //show things? value going up?
  }
}
