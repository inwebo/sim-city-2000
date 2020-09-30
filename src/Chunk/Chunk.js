import {Vector2D} from "@inwebo/vector";
import Cell from "../Cell/Cell";
import Cells from "../Cell/Cells";

export default class Chunk {

    /**
     * @return {Vector2D}
     */
    getDimensions() {
        return this._dimensions;
    }

    /**
     * @return {Vector2D}
     */
    getOrigin() {
        return this._origin;
    }

    /**
     * @return {Cells}
     */
    getCells() {
        return this._cells;
    }

    /**
     * @param {Vector2D} dimensions
     * @param {Cells} cells
     * @param {Vector2D|null} origin
     */
    constructor(dimensions, cells, origin = null) {
        this._dimensions = dimensions;
        this._cells      = cells;
        this._origin     = origin || new Vector2D();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} size
     * @param {boolean} including
     * @return {Cell[]}
     */
    getAdjacents(x, y, size = 1, including = false) {
        const dimension = (size * 2 + 1 );
        const startOrigin    = new Vector2D(x - size, y - size);

        const buffer = [];

        for (let i = 1; i <= dimension; i++) {
            for (let j = 1; j <= dimension; j++) {

                if((startOrigin.getX() === x && startOrigin.getY() === y) === false) {
                    buffer.push(this._cells.getCell(startOrigin.getX(), startOrigin.getY()));
                }

                if(startOrigin.getY() >= y + size) {
                    startOrigin.setY(y-size);
                } else {
                    startOrigin.addY(1);
                }
            }
            startOrigin.addX(1);
        }

        return buffer;
    }
}