import { Application, utils } from "pixi.js";
import { GameGrid } from "../components";

const GRID_WIDTH = 375;
const GRID_HEIGHT = 375;

const type = !utils.isWebGLSupported() ? "WebGL" : "canvas";

const app = new Application({ width: GRID_WIDTH, height: GRID_HEIGHT });
const grid = new GameGrid();
grid.width = GRID_WIDTH;
grid.height = GRID_HEIGHT;
app.stage.addChild(grid);

//Add the canvas that Pixi automatically created for you to the HTML document
document.getElementById("pixi-application").appendChild(app.view);
