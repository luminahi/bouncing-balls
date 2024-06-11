import { randomColor } from "./random.js";

export default class Ball {
  private x: number;
  private y: number;
  private velX: number;
  private velY: number;
  private color: string;
  private size: number;
  private ctx: CanvasRenderingContext2D;
  private screenWidth: number;
  private screenHeight: number;

  constructor(
    x: number,
    y: number,
    velX: number,
    velY: number,
    color: string,
    size: number,
    ctx: CanvasRenderingContext2D,
    screenWidth: number,
    screenHeight: number
  ) {
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

  public draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  public update() {
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

  public detectCollision() {
    if (
      this.x + this.size >= this.screenWidth ||
      this.y + this.size >= this.screenHeight ||
      this.x - this.size <= 0 ||
      this.y - this.size <= 0
    ) {
      this.color = randomColor(200, 20);
    }
  }
}
