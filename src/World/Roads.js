import {Chunk} from "../index";
import rand from "../Helpers/Rand";

export default class Roads extends Chunk {

    constructor(dimensions, cells) {
        super(dimensions, cells);
        this._generateRoad();
    }

    _generateRoad() {

        let randX = rand(0, this.getDimensions().getX());
        let randY = rand(0, this.getDimensions().getY());

        let x = 0, y = 0;

        for (let loop = 0; loop < 4; loop++) {


            if (this.getCells().getCell(x, y) === false) {
                break;
            }


            if(loop === 0) {
                this.getCells().getCell(x, y).setHasRoad(true);
            }

            if (loop % 2 !== 0 && loop !== 0) {
                x++;
            }
            // this.getCells().getCell(x, y).setHasRoad(true);
            console.log(loop, x, y);

            y++;
            if(loop > 0) {
                this.getCells().getCell(x, y).setHasRoad(true);
            }
        }

        // this.getCells().getCell(0,0).setHasRoad(true);

        // this.getCells().getCell(1,1).setHasRoad(true);
        // this.getCells().getCell(1,2).setHasRoad(true);
        //
        // this.getCells().getCell(2,3).setHasRoad(true);
        // this.getCells().getCell(2,4).setHasRoad(true);
        //
        // this.getCells().getCell(3,5).setHasRoad(true);
        // this.getCells().getCell(3,6).setHasRoad(true);
    }
}
