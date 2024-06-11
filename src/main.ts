import Ball from "./Ball.js";
import { randomDirection, randomSize } from "./random.js";

addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  function genBalls(): Ball[] {
    const balls = new Array(64).fill({});

    for (let i = 0; i < balls.length; i++) {
      const [velX, velY] = randomDirection(10);
      balls[i] = new Ball(
        width / 2,
        height / 2,
        velX,
        velY,
        "black",
        randomSize(200, 16),
        ctx,
        width,
        height
      );
    }

    return balls;
  }

  function loop(balls: Ball[]) {
    ctx.fillStyle = `rgba(255, 255, 255, 1)`;
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.detectCollision();
    }

    requestAnimationFrame(() => loop(balls));
  }

  const balls = genBalls();
  loop(balls);
});
