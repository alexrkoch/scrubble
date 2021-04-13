import { Graphics, Application, utils } from "pixi.js";

const type = !utils.isWebGLSupported() ? "WebGL" : "canvas";

const app = new Application({ width: 340, height: 340 });
const tile = new Graphics();
tile.beginFill(0xffff00);
tile.drawRoundedRect(10, 10, 100, 100, 20);
tile.endFill();
app.stage.addChild(tile);

//Add the canvas that Pixi automatically created for you to the HTML document
document.getElementById("pixi-application").appendChild(app.view);
