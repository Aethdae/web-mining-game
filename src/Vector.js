export class Vector2 {
  constructor(x, y) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }
  toString() {
    return `${this.x},${this.x}`;
  }
  static fromString(string) {
    const x = string.charAt(0);
    const y = string.charAt(2);
    return new Vector2(x, y);
  }
}
