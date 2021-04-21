import { Graphics, Container } from "pixi.js";

export class GameGrid extends Container {
  private static FILL_COLOR = 0xe99b62b;
  private static COLUMNS = 15;
  private static ROWS = 15;

  private squares: Object[][];

  set height(value: number) {
    this._height = value;
    this.removeChildren();
    this.appendGridItems();
  }

  set width(value: number) {
    this._width = value;
    this.removeChildren();
    this.appendGridItems();
  }

  constructor() {
    super();
    console.log("Creating game grid");
    this.initializeEmptyGrid();
    this.appendGridItems();
  }

  private initializeEmptyGrid() {
    this.squares = new Array<Array<Object>>(GameGrid.ROWS).fill(
      new Array<Object>(GameGrid.COLUMNS).fill({})
    );
  }

  private appendGridItems() {
    const { COLUMNS, ROWS, FILL_COLOR } = GameGrid;
    const tileWidth = this._width / COLUMNS;
    const tileHeight = this._height / ROWS;

    this.squares.forEach((_, row) => {
      this.squares[row].forEach((_, col) => {
        const xCoord = tileWidth * col;
        const yCoord = tileWidth * row;

        const g = new Graphics();
        g.beginFill(FILL_COLOR);
        g.lineStyle(1, 0, 1, 1);
        g.drawRect(xCoord, yCoord, tileWidth, tileHeight);
        this.addChild(g);
      });
    });
  }
}
