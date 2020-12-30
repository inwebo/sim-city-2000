import RendererAbstract from "./RendererAbstract";
import Cell from "../Grid/Cell";
import {Vector2D} from "@inwebo/vector";
import SpriteToCanvas from "../Helpers/SpriteToCanvas";
import {Sprite} from "@inwebo/sprite.js";

export default class SpriteRenderer extends RendererAbstract {

    coordinatesToCanvas(cell, sprite = null) {
        // @todo
        const OFFSET = new Vector2D(32, 16);
        // @todo
        const ORIGIN = new Vector2D(212, 356/2);

        const x = (cell.getIndex().getX() - cell.getIndex().getY()) * 16 + ORIGIN.getX();
        const y = (cell.getIndex().getX() + cell.getIndex().getY()) * 8 + ORIGIN.getY();

        return new Vector2D(x, y);
    }


    /**
     * @param {Sprite} sprite
     * @param {Cell}   position
     * @private
     */
    _draw([sprite, cell]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {
                const offset = this.coordinatesToCanvas(cell);
                const SIZE = cell.getSize();

                const originY = ((imageBitmap.height % 2 === 0) ? (imageBitmap.height - 16) : (imageBitmap.height -1 - 16));
                const originX = ((imageBitmap.width % 2 === 0) ? (imageBitmap.width - 8) : (imageBitmap.width -1 - 8));


                console.log(originX, originY, sprite.imgData)

                // offset.substractScalarY(originY);
                // offset.substractScalarX(originX);

                // offset.substractScalarY(37);
                // offset.substractScalarX(16);

                // x = SIZE * (grid-size / 2)
                // x = SIZE * half-size grid
                const OFFSET = new Vector2D(32, 16);
                offset.substractScalarX(SIZE * (OFFSET.getY()/2));


                const t = (sprite.imgData.height - (SIZE * OFFSET.getY())) - SIZE;
                console.log(t)
                offset.substractScalarY(t);

                if (this.isDrawable(cell)) {
                    this.drawImageBitmap(imageBitmap, offset);
                }
            });
    }
}
