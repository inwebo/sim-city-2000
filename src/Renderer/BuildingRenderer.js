import SpriteRenderer from "./SpriteRenderer";
import {Vector2D} from "@inwebo/vector";

export default class BuildingRenderer extends SpriteRenderer {

    /**
     * @param {Sprite} sprite
     * @param {Cell}   position
     * @private
     */
    _draw([sprite, cell]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {
                const offset = this.coordinatesToCanvas(cell, sprite);

                if (this.isDrawable(cell)) {
                    this.drawImageBitmap(imageBitmap, offset);
                }
            });
    }
}