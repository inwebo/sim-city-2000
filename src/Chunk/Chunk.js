import {Vector2D} from "@inwebo/vector";
import Cell from "../Cell/Cell";

export default class Chunk {

    /**
     * @return {Vector2D}
     */
    getDimensions() {
        return this._dimensions;
    }

    getOrigin() {
        return this._origin;
    }

    /**
     * @param {Vector2D} dimensions
     * @param {Vector2D|null} origin
     */
    constructor(dimensions, origin = null) {
        this._dimensions = dimensions;
        this._origin     = origin || new Vector2D();
        this._grid       = this._populate();
    }

    _populate() {
        const rows = new Array(this.getDimensions().getY()).fill(null);
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

    /**
     * @param {number} x
     * @param {number} y
     *
     * @todo clamp vector
     */
    getCell(x, y) {
        return this._grid[y][x];
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} size
     * @return {Cell[]}
     */
    getAdjacents(x, y, size = 1) {
        const loop = Math.pow((size * 2 + 1 ), 2) - 1;
        console.log(loop);
        return [];
    }
}