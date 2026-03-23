import "./style.css";
import { resources } from "./Resources.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const draw = () => {
  const tileSheet = resources.images.tileSheet;
  if (tileSheet.isLoaded) {
    for (let x = 0; x < 320; x += 16) {
      for (let y = 0; y < 180; y += 16) {
        ctx.drawImage(
          resources.imageMap.images[Math.floor(Math.random() * 3)],
          x,
          y,
        );
        if (Math.random() < 0.02) {
          if (!(y > 175)) {
            ctx.drawImage(resources.imageMap.images[4], x, y);
          }
        }
      }
    }
  }
};
function main() {
  setInterval(() => {
    console.log("hey");
    draw();
  }, 3000);
}

main();
