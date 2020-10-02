import AbstractRenderer from "./AbstractRenderer";
import Cell from "../Grid/Cell";


export default class SpriteRenderer extends AbstractRenderer {
    /**
     * @param {SpriteRenderer} sprite
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
