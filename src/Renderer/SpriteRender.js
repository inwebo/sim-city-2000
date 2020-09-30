import AbstractRender from "./AbstractRender";
import {Sprite} from "@inwebo/sprite.js";
import Cell from "../Cell/Cell";


export default class SpriteRender extends AbstractRender {
    /**
     * @param {Sprite} sprite
     * @param {Cell}   position
     * @private
     */
    _draw([sprite, cell]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {

                const offset = this.cellToCanvasCoordinates(cell, imageBitmap);

                if (this.isDrawable(cell)) {
                    this.drawImageBitmap(imageBitmap, offset);
                }
            });
    }
}
