import { GameObject } from "./GameObject.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector.js";

export class Ore extends GameObject {
  constructor(type, value, position, sprite) {
    super();
    this.type = type ??= null;
    this.value = value ??= 0;
    this.position = position ??= new Vector2();
    this.sprite = sprite ??= new Sprite();
    this.tile = new Vector2(position.x / 16, position.y / 16);
  }

  static ORE_TYPES = ["_", "coal", "copper", "gold", "iron"];
}
