import {Vector2D} from "@inwebo/vector";

export default class Abstract {
    /**
     * @param {CellAbstract} cellAbstract
     */
    constructor(cellAbstract) {
        this._cell  = cellAbstract;
        this._index = cellAbstract.getIndex();
        this._map   = null;
    }

    /**
     * @return {Map}
     */
    getMap() {
        if(this._map === null) {
            this._map = new Map([
                ['N',  this.getNorth()],
                ['NW', this.getNorthWest()],
                ['W',  this.getWest()],
                ['SW', this.getSouthWest()],
                ['S',  this.getSouth()],
                ['SE', this.getSouthEast()],
                ['E',  this.getEast()],
                ['NE', this.getNorthEast()],
            ]);
        }

        return this._map;
    }

    /**
     * @throws
     */
    getNorth() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getNorthEast() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getEast() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getSouthEast() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getSouth() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getSouthWest() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getWest() {
        throw 'Do not instanciate me !';
    }

    /**
     * @return {Vector2D}
     */
    getNorthWest() {
        throw 'Do not instanciate me !';
    }
}