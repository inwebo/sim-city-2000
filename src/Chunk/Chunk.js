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
        if(typeof (this._grid[y]) !== 'undefined') {
            if(typeof (this._grid[y][x]) !== 'undefined') {
                return this._grid[y][x];
            } else {
                throw `Out of bound x : ${x}`;
            }
        }

        throw `Out of bound y : ${y}`;
    }

    hasCell(x, y) {
        return this._grid[y] !== 'undefined' && this._grid[y][x] !== 'undefined';
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
                    buffer.push(this.getCell(startOrigin.getX(), startOrigin.getY()));
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