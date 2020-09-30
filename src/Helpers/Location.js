import Cell from "../Cell/Cell";
import CellLocation from "./CellLocation";

export default class Location {
    /**
     * @param {Cell} cell
     */
    constructor(cell) {
        this._cellLocation = new CellLocation(cell);
        this._map          = null;

        this._north     = this._cellLocation.getNorth();
        this._northWest = this._cellLocation.getNorthWest();
        this._west      = this._cellLocation.getWest();
        this._southWest = this._cellLocation.getSouthWest();
        this._south     = this._cellLocation.getSouth();
        this._southEast = this._cellLocation.getSouthEast();
        this._east      = this._cellLocation.getEast();
        this._northEast = this._cellLocation.getNorthEast();
    }

    /**
     * @return {Map}
     */
    getMap() {
        if(this._map === null) {
            this._map = new Map([
                ['N',  this._north],
                ['NW', this._northWest],
                ['W',  this._west],
                ['SW', this._southWest],
                ['S',  this._south],
                ['SE', this._southEast],
                ['E',  this._east],
                ['NE', this._northEast],
            ]);
            return this._map;
        } else {
            return this._map;
        }
    }
}