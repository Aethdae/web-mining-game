import { GameObject } from "./GameObject.js";
import { Vector2 } from "./Vector.js";

export class Ore extends GameObject {
  constructor(
    type = null,
    value = null,
    position = new Vector2(),
    sprite = null,
  ) {
    super();
    this.type = type;
    this.value = value;
    this.position = position;
    this.sprite = sprite;
    this.tile = new Vector2(position.X / 16, position.Y / 16);
  }

  static ORE_TYPES = ["_", "coal", "copper", "gold", "iron"];
}
