import RendererAbstract from "./RendererAbstract";
import Cell from "../Grid/Cell";
import {Vector2D} from "@inwebo/vector";
import SpriteToCanvas from "../Helpers/SpriteToCanvas";
import {Sprite} from "@inwebo/sprite.js";

export default class SpriteRenderer extends RendererAbstract {
    /**
     * @param {Sprite} sprite
     * @param {Cell}   position
     * @private
     */
    _draw([sprite, cell]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {

                // const offset = this.cellToCanvasCoordinates(cell, imageBitmap);
                //
                // console.log(offset)

                const offSetCalculator = new SpriteToCanvas(sprite, new Vector2D(23, 32));

                console.log(cell, sprite);

                // const offset = new Vector2D(0, -58);
                const offset = new Vector2D(0, 0);




                if (this.isDrawable(cell)) {
                    this.drawImageBitmap(imageBitmap, offset);
                }
            });
    }
}
