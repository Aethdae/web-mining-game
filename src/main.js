import "./style.css";
import { resources } from "./Resources.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const draw = () => {
  const tileSheet = resources.images.tileSheet;
  if (tileSheet.isLoaded) {
    ctx.drawImage(tileSheet.image, 0, 0);
  }
};
function main() {
  setInterval(() => {
    console.log("hey");
    draw();
  }, 300);
}

main();
