export const keys = {
  up: false,
  down: false,
  left: false,
  right: false,
  space: false,
};

document.addEventListener("keydown", (event) => {
  const key = event.key;
  switch (key) {
    case "w":
      keys.up = true;
      break;
    case "a":
      keys.left = true;
      break;
    case "s":
      keys.down = true;
      break;
    case "d":
      keys.right = true;
      break;
    case " ":
      keys.space = true;
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key;
  switch (key) {
    case "w":
      keys.up = false;
      break;
    case "a":
      keys.left = false;
      break;
    case "s":
      keys.down = false;
      break;
    case "d":
      keys.right = false;
      break;
    case " ":
      keys.space = false;
      break;
    default:
      break;
  }
});
