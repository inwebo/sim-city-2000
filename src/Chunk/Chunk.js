import {Vector2D} from "@inwebo/vector";
import {Grid, Cell} from "@inwebo/grid.js";

export default class Chunk {

    /**
     * @return {Vector2D}
     */
    getDimensions() {
        return this._dimensions;
    }

    /**
     * Canvas origin
     *
     * @return {Vector2D}
     */
    getOrigin() {
        return this._origin;
    }

    /**
     * @return {Grid}
     */
    getCells() {
        return this._grid;
    }

    /**
     * @param {Vector2D} dimensions
     * @param {Grid} grid Grid
     * @param {Vector2D|null} origin Canvas's origin
     */
    constructor(dimensions, grid, origin = null) {
        this._dimensions = dimensions;
        this._grid       = grid;
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
                    buffer.push(this._grid.getCell(startOrigin.getX(), startOrigin.getY()));
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