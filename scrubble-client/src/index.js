const type = !PIXI.utils.isWebGLSupported() ? "WebGL" : "canvas";

const app = new PIXI.Application({ width: 500, height: 500 });
const tile = new PIXI.Graphics();
tile.beginFill(0xffffff);
tile.drawRoundedRect(10, 10, 100, 100, 20);
tile.endFill();
app.stage.addChild(tile);

//Add the canvas that Pixi automatically created for you to the HTML document
document.getElementById("pixi-application").appendChild(app.view);
