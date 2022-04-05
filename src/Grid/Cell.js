import {Cell as BaseCell} from "@inwebo/grid.js";

export default class Cell extends BaseCell {
    getSize() {
        return this._size;
    }

    setSize(size) {
        this._size = size;
    }

    getType() {
        return this._type;
    }

    setType(type) {
        this._type = type;
    }

    constructor(vector, type = null, size = null) {
        super(vector);
        this._type = type;
        this._size = size;
    }
}