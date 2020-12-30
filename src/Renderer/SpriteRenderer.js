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

                offset.substractScalarY(10);

                if (this.isDrawable(cell)) {
                    this.drawImageBitmap(imageBitmap, offset);
                }
            });
    }
}
