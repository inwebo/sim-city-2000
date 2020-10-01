import Cell from '../Grid/Cell';
import {Vector2D} from "@inwebo/vector";
import Abstract from "./Abstract";

/**
 * Get isometric coordinates from cartesian coordinates
 */
export default class Cartesian extends Abstract {

    /**
     * @return {Vector2D}
     */
    getNorth() {
        return Vector2D.add(this._index, new Vector2D(0, -1));
    }

    /**
     * @return {Vector2D}
     */
    getNorthEast() {
        return Vector2D.add(this._index, new Vector2D(1, 1));
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
        return Vector2D.add(this._index, new Vector2D(1, -1));
    }

    /**
     * @return {Vector2D}
     */
    getSouth() {
        return Vector2D.add(this._index, new Vector2D(0, -1));
    }

    /**
     * @return {Vector2D}
     */
    getSouthWest() {
        return Vector2D.add(this._index, new Vector2D(-1, -1));
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
        return Vector2D.add(this._index, new Vector2D(1, -1));
    }
}
