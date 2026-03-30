import { Vector2 } from "./Vector.js";
import { Sprite } from "./Sprite.js";

export class GameObject {
  constructor(position, sprite) {
    this.position = position ?? new Vector2(0, 0);
    this.sprite = sprite ?? new Sprite();
    this.hitBox = {
      x: this.position.x,
      y: this.position.y,
      w: this.position.x + this.sprite.frameSize.x,
      h: this.position.y + this.sprite.frameSize.y,
    };
    this.tile = new Vector2(
      this.position.x / this.sprite.frameSize.x ?? 16,
      this.position.x / this.sprite.frameSize.y ?? 16,
    );
  }
  onClick() {
    //show things? value going up?
  }
  drawImg(ctx, x, y) {
    ctx.drawImage(this.sprite.image, x, y);
  }
}
