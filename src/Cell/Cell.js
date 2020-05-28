import {Vector2D} from "@inwebo/vector";
import {Sprite} from "@inwebo/sprite.js";

export default class Cell {

    /**
     * @param {number} index
     * @param {Vector2D} vector
     */
    constructor(index, vector = null) {
        this.position = vector || new Vector2D();
    }
}