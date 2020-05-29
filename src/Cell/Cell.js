import {Vector2D} from "@inwebo/vector";
import {Sprite} from "@inwebo/sprite.js";

export default class Cell {

    /**
     * @param {Vector2D} origin
     */
    setOrigin(origin) {
        this._origin = origin;
    }

    /**
     * @param {Vector2D|null} vector
     * @param {Vector2D|null} index
     */
    constructor(vector = null, index = null) {
        this._index  = vector || new Vector2D();
        this._origin = index || new Vector2D();
    }
}