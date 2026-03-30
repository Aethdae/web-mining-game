import "./style.css";
import { resources } from "./Resources.js";
import { Vector2 } from "./Vector.js";
import { Ore } from "./Ore.js";
import { Sprite } from "./Sprite.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileMap = {};

populateTileMap();

function populateTileMap() {
  for (let x = 0; x < 320; x += 16) {
    for (let y = 0; y < 180; y += 16) {
      const location = new Vector2(x, y).toString();
      const map = (tileMap[location] = {});
      map.tile = null;
    }
  }
  console.log(tileMap);
}

//switch rendering to have delta between last frame/current frame
const draw = () => {
  const tileSheet = resources.images.tileSheet;
  if (tileSheet.isLoaded) {
    for (let x = 0; x < 320; x += 16) {
      for (let y = 0; y < 175; y += 16) {
        ctx.drawImage(
          resources.imageMap.grass[Math.floor(Math.random() * 3)].image,
          x,
          y,
        );
        tileMap[new Vector2(x, y).toString()].tile = resources.resourceTypes[0];

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

    gameObjects.length = 0;

    for (let x = 1; x < 5; x++) {
      const ore = new Ore(
        Ore.ORE_TYPES[x],
        10,
        new Vector2(32 * x, 32 * x),
        new Sprite(resources.getRandSpriteOfType(Ore.ORE_TYPES[x])),
      );
      gameObjects.push(ore);
      ore.drawImg(ctx, ore.position.x, ore.position.y);
    }
  }, 1900);

  await quickPause();

  function onCanvasClick(event) {
    const width = canvas.clientWidth;
    const clickLocation = new Vector2(
      event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop,
    );

    const clickedTile = getTileFromCanvas(clickLocation, width);
    console.log(clickedTile);
    gameObjects.forEach((gameObj) => {
      //console.log(gameObj.position, gameObj.tile);
    });
    console.log(gameObjects);
    console.log(tileMap);

    // event.position?
  }
}

function getTileFromCanvas(clickLocation, width) {
  const tileMod = width / 320;
  const x = Math.floor(clickLocation.x / tileMod / 16);
  const y = Math.floor(clickLocation.y / tileMod / 16);
  return new Vector2(x, y);
}

async function quickPause() {
  return new Promise((resolve) => setTimeout(resolve, 1400));
}

main();
