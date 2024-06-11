export function randomColor(max: number, min: number): string {
  const x = Math.random() * (max - min) + min;
  const y = Math.random() * (max - min) + min;
  const z = Math.random() * (max - min) + min;

  return `rgb(${x}, ${y}, ${z})`;
}

export function randomSize(max: number, min: number) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

export function randomDirection(range: number) {
  const velX =
    Math.ceil(Math.random() * range) * (Math.random() > 0.5 ? -1 : 1);

  const velY =
    Math.ceil(Math.random() * range) * (Math.random() > 0.5 ? -1 : 1);

  return [velX, velY];
}
