import {Vector2D} from "@inwebo/vector";
import {Sprite} from "@inwebo/sprite.js";

export default class Cell {
    /**
     * @param {number} index
     * @param {Sprite|null} sprite
     */
    constructor(index, sprite = null) {
        this._origin      = index;
        this._sprite      = sprite;
        this._isBuildalbe = true;
    }
}