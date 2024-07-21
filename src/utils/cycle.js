export function cycle(interval, values) {
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % values.length;
  }, interval);

  return () => value[currentIndex];
}
