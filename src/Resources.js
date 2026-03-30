class Resources {
  constructor() {
    this.toLoad = {
      tileSheet: "/assets/tilesheet.png",
    };
    this.images = {};
    this.imageMap = {};

    /*
     *  Grass, Coal, Copper, Gold, Iron
     */
    this.resourceTypes = ["grass", "coal", "copper", "gold", "iron"];

    Object.keys(this.toLoad).forEach(async (key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = async () => {
        this.images[key].isLoaded = true;
        const bmps = [];
        for (let x = 0; x < img.width; x += 16) {
          for (let y = 0; y < img.height; y += 16) {
            bmps.push(createImageBitmap(img, x, y, 16, 16));
          }
        }
        const bitmaps = await Promise.all(bmps);
        this.imageMap = {};

        bitmaps.forEach((bmp, index) => {
          const imageType = this.resourceTypes[Math.floor(index / 3)];
          if (!imageType) return;
          if (!this.imageMap[imageType]) {
            this.imageMap[imageType] = [];
          }

          this.imageMap[imageType].push({ image: bmp });
        });

        //! use reduce if you actually need previous + current, otherwise foreach/map
        // this.imageMap = promises.reduce((_, bmp, index) => {
        //   if (index < 3) {
        //     if (!this.imageMap["grass"]) {
        //       this.imageMap["grass"] = [{ image: bmp }];
        //     } else {
        //       this.imageMap["grass"].push({ image: bmp });
        //     }
        //   } else if (index < 6) {
        //     if (!this.imageMap["coal"]) {
        //       this.imageMap["coal"] = [{ image: bmp }];
        //     } else {
        //       this.imageMap["coal"].push({ image: bmp });
        //     }
        //   } else if (index < 9) {
        //     if (!this.imageMap["copper"]) {
        //       this.imageMap["copper"] = [{ image: bmp }];
        //     } else {
        //       this.imageMap["copper"].push({ image: bmp });
        //     }
        //   } else if (index < 12) {
        //     if (!this.imageMap["gold"]) {
        //       this.imageMap["gold"] = [{ image: bmp }];
        //     } else {
        //       this.imageMap["gold"].push({ image: bmp });
        //     }
        //   } else if (index < 15) {
        //     if (!this.imageMap["iron"]) {
        //       this.imageMap["iron"] = [{ image: bmp }];
        //     } else {
        //       this.imageMap["iron"].push({ image: bmp });
        //     }
        //   }
        //   return this.imageMap;
        // }, {});
      };
    });
  }
  getRandSpriteOfType(type) {
    return this.imageMap[type][getRandNum(3)].image;
  }
}

export const resources = new Resources();

function getRandNum(limit) {
  return Math.floor(Math.random() * limit);
}
