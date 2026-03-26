export class Vector2 {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }
  toString() {
    return `${this.X},${this.Y}`;
  }
  static fromString(string) {
    const x = string.charAt(0);
    const y = string.charAt(2);
    return new Vector2(x, y);
  }
}
