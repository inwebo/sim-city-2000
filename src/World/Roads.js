import {Chunk} from "../index";
import Cell from "../Cell/Cell";
import {Vector2D} from "@inwebo/vector";
import rand from "../Helpers/Rand";
import ArrayHelper from "../Helpers/ArrayHelper";

export default class Roads extends Chunk {

    constructor(dimensions, origin = null) {
        super(dimensions, origin = null);
        this._generateRoad();
    }
    _populate() {
        const rows = new Array(this.getDimensions().getY()).fill(false);
        Object.seal(rows);
        for(let i = 0; i < rows.length; i++) {
            let cols = [];
            for(let j = 0; j < this.getDimensions().getX(); j++) {
                cols.push(new Cell(new Vector2D(j, i)));
            }
            Object.seal(cols);
            rows[i] = cols;
        }

        return rows;
    }

    _generateRoad() {

        let randX = rand(0, this.getDimensions().getX());
        let randY = rand(0, this.getDimensions().getY());

        const xOrigin = new Vector2D(randX, 0);
        const yOrigin = new Vector2D(0,  randY);

        console.log(randX, randY);

        if(randX % 2 !== 0 && randY % 2 === 0 ) {
            randX += 1;
            if(randX >= this.getDimensions().getX()) {
                randX = this.getDimensions().getX() - 1;
            }
        }

        if(randY % 2 !== 0 && randX % 2 === 0 ) {
            randY += 1;
            if(randY > this.getDimensions().getY()) {
                randY = this.getDimensions().getY() - 1;
            }
        }

        // 9, 2
        // 6, 10
        // 10, 10

        this.getCell(randX ,randY).setHasRoad(true);


        for (let i = 0; i < 10; i++) {
            try {
                const hasRoad = this.getCell(randX + i ,randY + i);
                if(hasRoad) {
                    this.getCell(randX + i ,randY + i).setHasRoad(true);
                }

            } catch (e) {
                console.error(e);
                // cell doesnt exists
                break;
            }
        }
    }
}