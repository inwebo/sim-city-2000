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
     * @param {Vector2D|null} index
     * @param {Vector2D|null} origin
     * @param {boolean} buildable
     * @param {boolean} hasRoad
     */
    constructor(index = null, origin = null, buildable = false, hasRoad = false) {
        this._index     = index || new Vector2D();
        this._origin    = origin || new Vector2D();
        this._buildable = buildable;
        this._hasRoad   = hasRoad;
    }
}