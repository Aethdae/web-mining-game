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

        // const ore = new Ore(
        //   "copper",
        //   15,
        //   new Vector2(x, y),
        //   resources.getRandSpriteOfType("copper"),
        // );

        // tileMap[new Vector2(x, y).toString()].tile = resources.resourceTypes[2];
        // ctx.drawImage(ore.sprite, x, y);

        if (Math.random() < 0.02) {
        }
        if (Math.random() < 0.01) {
        }
        if (Math.random() < 0.005) {
        }
        if (Math.random() < 0.0025) {
          if (!(y > 175)) {
          }
        }
      }
    }
  }
};
async function main() {
  const gameObjects = [];
  canvas.addEventListener("mousedown", (event) => onCanvasClick(event));
  setInterval(() => {
    draw();
    // console.log(tileMap);
  }, 1600);

  await quickPause();
  console.log(resources);
  function onCanvasClick(event) {
    const width = canvas.clientWidth;
    const clickLocation = new Vector2(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop,
    );

    const clickedTile = getTileFromCanvas(clickLocation, width);
    console.log(clickedTile);
    gameObjects.forEach((gameObj) => {
      console.log(gameObj.position, gameObj.tile);
    });

    // event.position?
  }
  for (let x = 1; x < 4; x++) {
    const ore = new Ore(
      Ore.ORE_TYPES[x],
      10,
      new Vector2(32 * x, 32 * x),
      resources.getRandSpriteOfType(Ore.ORE_TYPES[x]),
    );
    gameObjects.push(ore);
    ctx.drawImage(ore.sprite, ore.position.X, ore.position.Y);
  }
}

function getTileFromCanvas(clickLocation, width) {
  const tileMod = width / 320;
  const x = Math.floor(clickLocation.X / tileMod / 16);
  const y = Math.floor(clickLocation.Y / tileMod / 16);
  return new Vector2(x, y);
}

async function quickPause() {
  return new Promise((resolve) => setTimeout(resolve, 400));
}

main();
