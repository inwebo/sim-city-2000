import {Vector2D} from "@inwebo/vector";
import {Sprite} from "@inwebo/sprite.js";

export default class Cell {

    /**
     * @param {Vector2D} vector
     */
    constructor(vector = null) {
        this._index = vector || new Vector2D();

    }
}