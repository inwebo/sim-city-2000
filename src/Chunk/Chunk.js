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
     * @param {boolean} including
     * @return {Cell[]}
     */
    getAdjacents(x, y, size = 1, including = false) {
        const dimension = (size * 2 + 1 );
        const origin    = new Vector2D(x - size, y - size);

        const buffer = [];

        for (let i = 1; i <= dimension; i++) {
            for (let j = 1; j <= dimension; j++) {

                if((origin.getX() === x && origin.getY() === y) === false) {
                    buffer.push(this.getCell(origin.getX(), origin.getY()));
                }

                if(origin.getY() >= y + size) {
                    origin.setY(y-size);
                } else {
                    origin.addY(1);
                }
            }
            origin.addX(1);
        }

        return buffer;
    }
}