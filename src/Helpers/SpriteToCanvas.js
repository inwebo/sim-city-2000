import {Sprite} from "@inwebo/sprite.js";
import {Vector2D} from "@inwebo/vector";

export default class SpriteToCanvas {
    /**
     * @param {Sprite} sprite
     * @param {Vector2D|null} baseUnit
     */
    constructor(sprite, baseUnit = null) {
        this._sprite   = sprite;
        this._center   = sprite.getCenter();
        this._baseUnit = baseUnit || new Vector2D();
    }

    /**
     * @return {Vector2D}
     */
    getOffset() {
        console.log(this._sprite)
    }
}