import { Vector2 } from "./Vector";

export class Sprite {
  constructor(image) {
    this.image = image;
    this.frame ??= 0;
    this.frameCount ??= 0;
    this.hFrames ??= 1;
    this.vFrames ??= 1;
    this.frameSize ??= new Vector2(16, 16);
    this.frameMap = new Map();
    this.buildFrameMap();
  }

  //for frame animation later on,static images atm
  buildFrameMap() {
    let frameIndex = 0;
    for (let x = 0; x < this.hFrames; x += this.frameSize) {
      for (let y = 0; y < this.vFrames; y += this.frameSize) {
        this.frameMap.set(
          frameIndex,
          new Vector2(this.frameSize.x * x, this.frameSize.y * y),
        );
        frameIndex++;
      }
    }
  }

  drawImg(ctx, x, y) {
    ctx.drawImage(this.image, x, y);
  }
}
