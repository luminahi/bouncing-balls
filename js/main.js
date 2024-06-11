import Ball from "./Ball.js";

addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  function genBalls() {
    const balls = new Array(100).fill({});

    for (let i = 0; i < balls.length; i++) {
      const [velX, velY] = randomDirection(10);
      balls[i] = new Ball(
        width / 2,
        height / 2,
        velX,
        velY,
        "black",
        randomSize(72, 16),
        ctx,
        width,
        height
      );
    }

    return balls;
  }

  function randomSize(max, min) {
    return Math.ceil(Math.random() * (max - min)) + min;
  }

  function randomDirection(range) {
    const middle = range / 2;
    const velX = Math.ceil(Math.random() * range) - middle;
    const velY = Math.ceil(Math.random() * range) - middle;
    return [velX, velY];
  }

  function loop(balls) {
    ctx.fillStyle = `rgba(255, 255, 255, 1)`;
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
      ball.draw();
      ball.update();
    }

    requestAnimationFrame(() => loop(balls));
  }

  const balls = genBalls();
  loop(balls);
});
