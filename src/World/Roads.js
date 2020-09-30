import {Chunk} from "../index";
import rand from "../Helpers/Rand";
import {Vector2D} from "@inwebo/vector";
import CellLocation from "../Helpers/CellLocation";

export default class Roads extends Chunk {

    constructor(dimensions, cells) {
        super(dimensions, cells);
        this._generateRoad();
    }

    _generateRoad() {
        let randX = rand(0, this.getDimensions().getX());
        let randY = rand(0, this.getDimensions().getY());

        const segmentLength = 300;

        let walker = new Vector2D(randX,0);

        for (let loop = 0; loop < segmentLength; loop++) {

            const cell = this.getCells().getCellByVector(walker);

            if (cell === false) {
                break;
            }

            const cellLocation = new CellLocation(cell);

            this
                .getCells()
                .getCellByVector(walker)
                .setHasRoad(true)
            ;

            walker = cellLocation.getSouthEast(cell);
        }
    }
}
