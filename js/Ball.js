export default class Ball {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} velX
   * @param {number} velY
   * @param {string} color
   * @param {number} size
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(x, y, velX, velY, color, size, ctx, screenWidth, screenHeight) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.ctx = ctx;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  update() {
    if (this.x + this.size >= this.screenWidth) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= this.screenHeight) {
      this.velY = -this.velY;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}
