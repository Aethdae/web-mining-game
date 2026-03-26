import { Vector2 } from "./Vector";

export class GameObject {
  constructor(type = null, value = null, position = new Vector2(0, 0)) {
    this.type = type;
    this.value = value;
    this.position = position;
  }
}
