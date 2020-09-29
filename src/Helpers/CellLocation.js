import Cell from '../Cell/Cell';
import {Vector2D} from "@inwebo/vector";

/**
 * Get isometric coordinates from cell
 */
export default class CellLocation {
    /**
     * @param {Cell} cell
     */
    constructor(cell) {
        this._cell = cell;
        this._index = cell.getIndex();
    }

    getNorth() {
        return Vector2D.add(this._index, new Vector2D(0, -2));
    }

    getNorthEast() {
        let position = null;

        if(this._cell.isEvenRow()) {
            position = Vector2D.add(this._index, new Vector2D(0, -1));
        } else {
            position = Vector2D.add(this._index, new Vector2D(1, -1));
        }

        return position;
    }

    getEast() {
        return Vector2D.add(this._index, new Vector2D(1, 0));
    }

    getSouthEast() {
        let position = null;

        if(this._cell.isEvenRow()) {
            position = Vector2D.add(this._index, new Vector2D(0, 1));
        } else {
            position = Vector2D.add(this._index, new Vector2D(1, 1));
        }

        return position;
    }

    getSouth() {
        return Vector2D.add(this._index, new Vector2D(0, 2));
    }

    getSouthWest() {
        let position = new Vector2D();

        if(this._cell.isEvenRow()) {
            position = Vector2D.add(this._index, new Vector2D(-1, 1));
        } else {
            position = Vector2D.add(this._index, new Vector2D(0, 1));
        }

        return position;
    }

    getWest() {
        return Vector2D.add(this._index, new Vector2D(-1, 0));
    }

    getNorthWest() {
        let position = null;

        if(this._cell.isEvenRow()) {
            position = Vector2D.add(this._index, new Vector2D(-1, -1));
        } else {
            position = Vector2D.add(this._index, new Vector2D(0, -1));
        }

        return position;
    }

}