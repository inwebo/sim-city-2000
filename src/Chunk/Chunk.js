import {Vector2D} from "@inwebo/vector";
import Cell from "../Cell/Cell";

export default class Chunk {

    /**
     * @return {Vector2D}
     */
    getDimensions() {
        return this._dimensions;
    }

    /**
     * @return {Cell[]}
     */
    getCells() {
        return this._cells;
    }

    /**
     *
     * @see https://softwareengineering.stackexchange.com/questions/212808/treating-a-1d-data-structure-as-2d-grid
     * @param x
     * @param y
     * @return {any}
     */
    getCell(x, y) {
        const index = x + this.getDimensions().getX() * y;

        if(index > this._cells.length - 1) {
            throw `Out of bound exception this._cells.length = ${this._cells.length}, getter index ${index} > [0, ${this._cells.length -1}]`;
        }

        return this._cells[index];
    }

    /**
     * @param {Vector2D} dimensions
     */
    constructor(dimensions) {
        this._dimensions = dimensions;

        const buffer = new Array(this.getDimensions().getX() * this.getDimensions().getY()).fill(null);
        Object.seal(buffer);
        this._cells = buffer;
        this._populate();
    }

    /**
     * @private
     */
    _populate() {
        this._cells.forEach((cell, index) => {
            this._cells[index] = new Cell(index);
        });
    }
}