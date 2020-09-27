import {Chunk} from "../index";
import Cell from "../Cell/Cell";
import {Vector2D} from "@inwebo/vector";
import rand from "../Helpers/Rand";
import ArrayHelper from "../Helpers/ArrayHelper";

export default class Roads extends Chunk {

    constructor(dimensions, origin = null) {
        super(dimensions, origin = null);
        this._generateRoad();
    }
    _populate() {
        const rows = new Array(this.getDimensions().getY()).fill(false);
        Object.seal(rows);
        for(let i = 0; i < rows.length; i++) {
            let cols = [];
            for(let j = 0; j < this.getDimensions().getX(); j++) {
                cols.push(new Cell(new Vector2D(j, i)));
            }
            Object.seal(cols);
            rows[i] = cols;
        }

        return rows;
    }


    setCell(x, y, value) {
        this._grid[y][x] = value;
    }

    _generateRoad() {
        const randX = rand(0, this.getDimensions().getX());
        const randY = rand(0, this.getDimensions().getY());

        const xOrigin = new Vector2D(randX, 0);
        const yOrigin = new Vector2D(0,  randY);

        for(let i = xOrigin.getY(); i < this.getDimensions().getY(); i++) {
            // this._grid[i][xOrigin.getX()] = 1;
        }

        for(let i = yOrigin.getX(); i < this.getDimensions().getX(); i++) {
            // this._grid[yOrigin.getY()][i] = 1;
            // this._grid[i][i].setHasRoad(true);
        }

        for(let i = yOrigin.getX(); i < this.getDimensions().getX(); i++) {
            // this._grid[yOrigin.getY()][i] = 1;
            // if(this._grid[yOrigin.getY()]) {
            //     this._grid[i][i].setHasRoad(true);
            // this._grid[i][i]
            // }
        }

        for(let i = yOrigin.getX() + 5; i < this.getDimensions().getX() - 3; i++) {
            // this._grid[yOrigin.getY()][i] = 1;
            // if(this._grid[yOrigin.getY()]) {
            //     this._grid[i][i+3].setHasRoad(true);
            // this._grid[i][i]
            // }
        }

        this._grid[0][0].setHasRoad(true);
        // this._grid[1][1].setHasRoad(true);
        // this._grid[2][2].setHasRoad(true);

        this._grid[0][1].setHasRoad(true);
        // this._grid[1][2].setHasRoad(true);
        // this._grid[2][3].setHasRoad(true);

        this._grid[0][2].setHasRoad(true);
        // this._grid[1][3].setHasRoad(true);
        // this._grid[2][4].setHasRoad(true);

        let c1 = this.getCell(0, 0);
        let c2 = this.getCell(1, 0);
        let c3 = this.getCell(2, 0);

        // console.log(this.getCell(0, 0));
        // console.log(this.getCell(1, 0));
        // console.log(this.getCell(2, 0));
    }

    /**
     * @param {Cell} cell
     */
    setXOrigin(cell) {

    }

    setYOrigin() {

    }
}