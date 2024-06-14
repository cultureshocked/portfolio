const c = document.getElementById('bg');
const ctx = c.getContext('2d');

const col = (x, y, r, g, b) => {
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(x, y, 1, 1);
}

// between 192-255
const red = (x, y, t) => {
  return Math.floor(192 + (64 * Math.cos((x * x - y * y) / 300 + t)));
}

// between 192-255
const green = (x, y, t) => {
  return Math.floor(192 + (64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)))
}

// between 192-255
const blue = (x, y, t) => {
  return Math.floor(192 + (64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
}

let t = 0;

const run = () => {
  for (let x = 0; x < 32; ++x) {
    for (let y = 0; y < 32; ++y) {
      col(x, y, red(x, y, t), green(x, y, t), blue(x, y, t));
    }
  }
  t += 0.01;
  window.requestAnimationFrame(run);
}

run();

