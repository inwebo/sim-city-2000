import {Vector2D} from "@inwebo/vector";

export default class Cell {

    /**
     * Cartesian coordinates
     * @return {Vector2D}
     */
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

    /**
     * @return {boolean}
     */
    hasRoad() {
        return this._hasRoad;
    }

    /**
     * @return {boolean}
     */
    isEvenRow() {
        return this._index.getY() % 2 === 0;
    }

    /**
     * @return {boolean}
     */
    isOddRow() {
        return !this.isEvenRow();
    }

    /**
     * @return {boolean}
     */
    isEvenCol() {
        return this._index.getX() % 2 === 0;
    }

    /**
     * @return {boolean}
     */
    isOddCol() {
        return !this.isEvenCol();
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