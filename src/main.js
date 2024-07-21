import { MainMenu } from "./scenes/MainMenu";
import { Gameplay } from "./scenes/Gameplay";

let scene = null;

const setScene = (name) => {
  switch (name) {
    case "menu":
      scene = new MainMenu(setScene);
      break;
    case "game":
      scene = new Gameplay(setScene);
      break;
  }
};

setScene("menu");

function animate() {
  //console.log(scene);
  if (scene) {
    scene.update();
    scene.draw();
  }

  requestAnimationFrame(animate);
}

animate();
