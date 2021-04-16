import { Graphics, Application, utils, Container } from "pixi.js";

const GRID_WIDTH = 400;
const GRID_HEIGHT = 400;
const GRID_X = 15;
const GRID_Y = 15;

const type = !utils.isWebGLSupported() ? "WebGL" : "canvas";

const app = new Application({ width: GRID_WIDTH, height: GRID_HEIGHT });
const container = new Container();

const tileWidth = GRID_WIDTH / GRID_X;
const tileHeight = GRID_HEIGHT / GRID_Y;
const fillColor = 0xe99b62b;

for (let i = 0; i < GRID_X; i++) {
  for (let j = 0; j < GRID_Y; j++) {
    const xCoord = tileWidth * i;
    const yCoord = tileHeight * j;
    const g = new Graphics();

    g.beginFill(fillColor);
    g.lineStyle(1, 0, 1, 1);

    g.drawRect(xCoord, yCoord, tileWidth, tileHeight);
    container.addChild(g);
  }
}

app.stage.addChild(container);

//Add the canvas that Pixi automatically created for you to the HTML document
document.getElementById("pixi-application").appendChild(app.view);
