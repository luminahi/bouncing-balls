import Ball from "./Ball.js";

addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  function genBalls() {
    const balls = new Array(10).fill({});

    for (let i = 0; i < 10; i++) {
      balls[i] = new Ball(
        100,
        100,
        i + 1,
        i + 1,
        "white",
        10 + i * 2,
        ctx,
        width,
        height
      );
    }

    return balls;
  }

  function loop(balls) {
    ctx.fillStyle = `rgba(0, 0, 0, 1)`;
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
