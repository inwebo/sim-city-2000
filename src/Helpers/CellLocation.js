import Cell from '../Cell/Cell';
import {Vector2D} from "@inwebo/vector";

/**
 * Get isometric coordinates from cartesian coordinates
 */
export default class CellLocation {
    /**
     * @param {Cell} cell
     */
    constructor(cell) {
        this._cell  = cell;
        this._index = cell.getIndex();
        this._map   = null;
    }

    /**
     * @return {Map}
     */
    getMap() {
        if(this._map === null) {
            this._map = new Map([
                ['N',  this.getNorth()],
                ['NW', this.getNorthWest()],
                ['W',  this.getWest()],
                ['SW', this.getSouthWest()],
                ['S',  this.getSouth()],
                ['SE', this.getSouthEast()],
                ['E',  this.getEast()],
                ['NE', this.getNorthEast()],
            ]);
        }

        return this._map;
    }

    /**
     * @return {Vector2D}
     */
    getNorth() {
        return Vector2D.add(this._index, new Vector2D(0, -2));
    }

    /**
     * @return {Vector2D}
     */
    getNorthEast() {
        return (this._cell.isEvenRow()) ?
            Vector2D.add(this._index, new Vector2D(0, -1)) :
            Vector2D.add(this._index, new Vector2D(1, -1))
            ;
    }

    /**
     * @return {Vector2D}
     */
    getEast() {
        return Vector2D.add(this._index, new Vector2D(1, 0));
    }

    /**
     * @return {Vector2D}
     */
    getSouthEast() {
        return (this._cell.isEvenRow()) ?
            Vector2D.add(this._index, new Vector2D(0, 1)) :
            Vector2D.add(this._index, new Vector2D(1, 1))
            ;
    }

    /**
     * @return {Vector2D}
     */
    getSouth() {
        return Vector2D.add(this._index, new Vector2D(0, 2));
    }

    /**
     * @return {Vector2D}
     */
    getSouthWest() {
        return (this._cell.isEvenRow()) ?
            Vector2D.add(this._index, new Vector2D(-1, 1)) :
            Vector2D.add(this._index, new Vector2D(0, 1))
            ;
    }

    /**
     * @return {Vector2D}
     */
    getWest() {
        return Vector2D.add(this._index, new Vector2D(-1, 0));
    }

    /**
     * @return {Vector2D}
     */
    getNorthWest() {
        return (this._cell.isEvenRow()) ?
            Vector2D.add(this._index, new Vector2D(-1, -1)) :
            Vector2D.add(this._index, new Vector2D(0, -1))
            ;
    }
}
