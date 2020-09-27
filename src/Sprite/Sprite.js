import {Sprite as BaseSprite} from "@inwebo/sprite.js";
import {Vector2D} from "@inwebo/vector";

export default class Sprite extends BaseSprite {

    getOrigin() {
        return this._origin;
    }

    /**
     * @param {ImageData} imgData
     * @param {Vector2D|null} origin
     */
    constructor(imgData, origin = null) {
        super(imgData);
        this._origin = origin || new Vector2D();
    }
}