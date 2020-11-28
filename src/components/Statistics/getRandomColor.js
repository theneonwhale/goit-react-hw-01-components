function randomColorRGB() {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);

  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);

  return `rgb(${r},${g},${b})`;
}

export default randomColorRGB;
