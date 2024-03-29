import GridRenderer from "./GridRenderer";

export default class SpriteRenderer extends GridRenderer {

    /**
     * @param {Sprite} sprite
     * @param {Cell}   position
     * @private
     */
    _draw([sprite, cell]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {
                const offset = this.coordinatesToCanvas(cell, imageBitmap);

                if (this.isDrawable(cell)) {
                    this.drawImageBitmap(imageBitmap, offset);
                }
            });
    }
}
