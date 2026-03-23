class Resources {
  constructor() {
    this.toLoad = {
      tileSheet: "/assets/tilesheet.png",
    };
    this.images = {};
    this.imageMap = {};

    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = () => {
        this.images[key].isLoaded = true;
        Promise.all([
          createImageBitmap(img, 0, 0, 16, 16),
          createImageBitmap(img, 0, 16, 16, 16),
          createImageBitmap(img, 0, 32, 16, 16),
          createImageBitmap(img, 16, 0, 16, 16),
          createImageBitmap(img, 16, 16, 16, 16),
          createImageBitmap(img, 16, 32, 16, 16),
        ]).then((bmp) => {
          this.imageMap["images"] = bmp;
        });
      };
    });
  }
}

export const resources = new Resources();
