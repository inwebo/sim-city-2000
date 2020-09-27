import {Vector2D} from "@inwebo/vector";

export default class Cell {

    /**
     * @param {Vector2D} origin
     */
    setOrigin(origin) {
        this._origin = origin;
    }

    /**
     *
     * @return {Vector2D}
     */
    getOrigin() {
        return this._origin;
    }

    getIndex() {
        return this._index;
    }

    /**
     * @param {boolean} boolean
     */
    setIsBuildable(boolean) {
        this._buildable = boolean;
    }

    /**
     * @return {boolean}
     */
    isBuildable() {
        return this._buildable;
    }

    /**
     * @param {boolean} boolean
     */
    setHasRoad(boolean) {
        this._hasRoad = boolean;
    }

    hasRoad() {
        return this._hasRoad;
    }

    /**
     * @param {Vector2D|null} vector
     * @param {Vector2D|null} index
     * @param {boolean} buildable
     * @param {boolean} hasRoad
     */
    constructor(vector = null, index = null, buildable = false, hasRoad = false) {
        this._index     = vector || new Vector2D();
        this._origin    = index || new Vector2D();
        this._buildable = buildable;
        this._hasRoad   = hasRoad;
    }
}