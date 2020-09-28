import {Chunk} from "../index";
import Cell from "../Cell/Cell";
import {Vector2D} from "@inwebo/vector";
import rand from "../Helpers/Rand";
import ArrayHelper from "../Helpers/ArrayHelper";

export default class Roads extends Chunk {

    constructor(dimensions, cells) {
        super(dimensions, cells);
        this._generateRoad();
    }

    _generateRoad() {

        let randX = rand(0, this.getDimensions().getX());
        let randY = rand(0, this.getDimensions().getY());

        // if(randX % 2 !== 0 && randY % 2 === 0 ) {
        //     randX += 1;
        //     if(randX >= this.getDimensions().getX()) {
        //         randX = this.getDimensions().getX() - 1;
        //     }
        // }
        //
        // if(randY % 2 !== 0 && randX % 2 === 0 ) {
        //     randY += 1;
        //     if(randY > this.getDimensions().getY()) {
        //         randY = this.getDimensions().getY() - 1;
        //     }
        // }

        let loop = 0;
        let x, y = 0;


        // 9, 2
        // 6, 10
        // 10, 10

        while (this.getCells().hasCell(loop,0) !== false) {

            loop++;
        }

        // console.log(this.getCells().getCell(0,0));
        this.getCells().getCell(0,0).setHasRoad(true);

        this.getCells().getCell(1,1).setHasRoad(true);
        this.getCells().getCell(1,2).setHasRoad(true);

        this.getCells().getCell(2,3).setHasRoad(true);
        this.getCells().getCell(2,4).setHasRoad(true);

        this.getCells().getCell(3,5).setHasRoad(true);
        this.getCells().getCell(3,5).setHasRoad(true);


        // this.getCells().getCell(1,2).setHasRoad(true);
        // this.getCells().getCell(2,3).setHasRoad(true);
        // this.getCells().getCell(2,4).setHasRoad(true);
        // this.getCells().getCell(3,5).setHasRoad(true);
        // this.getCells().getCell(3,6).setHasRoad(true);




        // for (let i = 0; i < 10; i++) {
        //     try {
        //         // const hasRoad = this.getCell(randX + i ,randY + i);
        //         if(hasRoad) {
        //             // this.getCell(randX + i ,randY + i).setHasRoad(true);
        //         }
        //
        //     } catch (e) {
        //         console.error(e);
        //         // cell doesnt exists
        //         break;
        //     }
        // }
    }
}