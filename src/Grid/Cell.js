import {Vector2D} from "@inwebo/vector";
import CellAbstract from "./CellAbstract";

export default class Cell extends CellAbstract {

    // region scene
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
    // endregion

    /**
     * @param {Vector2D|null} index
     * @param {boolean} buildable
     * @param {boolean} hasRoad
     */
    constructor(index = null, buildable = false, hasRoad = false) {
        super(index);

        this._buildable = buildable || false;
        this._hasRoad   = hasRoad   || false;
    }
}