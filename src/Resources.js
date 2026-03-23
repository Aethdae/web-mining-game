class Resources {
  constructor() {
    this.toLoad = {
      tileSheet: "/assets/tilesheet.png",
    };
    this.images = {};

    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = () => {
        this.images[key].isLoaded = true;
        console.log("Image loaded");
      };
    });
  }
}

export const resources = new Resources();
