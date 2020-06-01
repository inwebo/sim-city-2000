import {Vector2D} from "@inwebo/vector";

export default class Cell {

    /**
     * @param {Vector2D} origin
     */
    setOrigin(origin) {
        this._origin = origin;
    }

    /**
     * @param {boolean} boolean
     */
    setBuildable(boolean) {
        this._buildable = boolean;
    }

    /**
     * @return {boolean}
     */
    isBuildable() {
        return this._buildable;
    }

    /**
     * @param {Vector2D|null} vector
     * @param {Vector2D|null} index
     * @param {boolean} buildable
     */
    constructor(vector = null, index = null, buildable = false) {
        this._index     = vector || new Vector2D();
        this._origin    = index || new Vector2D();
        this._buildable = buildable;
    }
}