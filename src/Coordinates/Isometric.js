import {Vector2D} from "@inwebo/vector";
import Abstract from "./Abstract";

export default class Isometric extends Abstract {

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