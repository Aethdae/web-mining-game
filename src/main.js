import "./style.css";
import { resources } from "./Resources.js";
import { Vector2 } from "./Vector.js";
import { Ore } from "./Ore.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileMap = {};

populateTileMap();

function populateTileMap() {
  for (let x = 0; x < 320; x += 16) {
    for (let y = 0; y < 180; y += 16) {
      const map = (tileMap[new Vector2(x, y).toString()] = {});
      map.tile = null;
    }
  }
  console.log(tileMap);
}

const draw = () => {
  const tileSheet = resources.images.tileSheet;
  if (tileSheet.isLoaded) {
    for (let x = 0; x < 320; x += 16) {
      for (let y = 0; y < 180; y += 16) {
        ctx.drawImage(
          resources.imageMap.grass[Math.floor(Math.random() * 3)].image,
          x,
          y,
        );
        tileMap[new Vector2(x, y).toString()].tile = resources.resourceTypes[0];
        //ctx.drawImage(
        //resources.imageMap.coal[2],
        //x,
        //y,
        //   resources.imageMap[
        //     Math.floor(Math.random() * Object.keys(resources.imageMap).length)
        //   ],
        //   x,
        //   y,
        //);
        if (Math.random() < 0.02) {
          if (!(y > 175)) {
            ctx.drawImage(
              resources.imageMap.coal[Math.floor(Math.random() * 3)].image,
              x,
              y,
            );
          }
          tileMap[new Vector2(x, y).toString()].tile =
            resources.resourceTypes[1];
        }
        if (Math.random() < 0.01) {
          if (!(y > 175)) {
            ctx.drawImage(
              resources.imageMap.copper[Math.floor(Math.random() * 3)].image,
              x,
              y,
            );
          }
          tileMap[new Vector2(x, y).toString()].tile =
            resources.resourceTypes[2];
        }
        if (Math.random() < 0.005) {
          if (!(y > 175)) {
            ctx.drawImage(
              resources.imageMap.iron[Math.floor(Math.random() * 3)].image,
              x,
              y,
            );
          }
          tileMap[new Vector2(x, y).toString()].tile =
            resources.resourceTypes[3];
        }
        if (Math.random() < 0.0025) {
          if (!(y > 175)) {
            ctx.drawImage(
              resources.imageMap.gold[Math.floor(Math.random() * 3)].image,
              x,
              y,
            );
          }
          tileMap[new Vector2(x, y).toString()].tile =
            resources.resourceTypes[4];
        }
      }
    }
  }
};
async function main() {
  setInterval(() => {
    draw();
    console.log(tileMap);
  }, 1600);

  console.log(resources);
  const ore = new Ore("copper", 15, new Vector2(16, 20));
  console.log(ore);
}

main();
