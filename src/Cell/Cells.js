import Cell from "./Cell";
import {Vector2D} from "@inwebo/vector";

export default class Cells {

    constructor(dimensions) {
        this._dimensions = dimensions;
        const rows = new Array(dimensions.getY()).fill(null);
        Object.seal(rows);
        for(let i = 0; i < rows.length; i++) {
            let cols = [];
            for(let j = 0; j < dimensions.getX(); j++) {
                cols.push(new Cell(new Vector2D(j, i), new Vector2D(j, i)));
            }
            Object.seal(cols);
            rows[i] = cols;
        }

        this._cells = rows;
    }

    /**
     * @param {int} row index, start at 0
     * @return {boolean}
     */
    hasRow(row) {
        return (typeof (this._cells[row]) !== 'undefined');
    }

    /**
     * @param {int} col index, start at 0
     * @return {boolean}
     */
    hasCol(col) {
        return (typeof (this._cells[0][col]) !== 'undefined');
    }

    hasCell(x, y) {
        if(this.hasRow(y)) {
            if(typeof (this._cells[y][x]) !== 'undefined') {
                return true;
            }
        }

        return false;
    }

    /**
     * @param {int} x
     * @param {int} y
     * @return {[Cell]|boolean}
     */
    getCell(x, y) {
        if(this.hasCell(x, y)) {
            return this._cells[y][x];
        }

        return false;
    }
}