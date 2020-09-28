import {Vector2D} from "@inwebo/vector";
import AbstractRender from "./AbstractRender";

export default class RenderChunk extends AbstractRender {
    /**
     * @inheritDoc
     */
    _draw([chunk, sprite]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {
                /**
                 * @type {Generator<Cell>}
                 */
                const cells = this.getGenerator(chunk);

                for (let cell of cells) {
                    /**
                     * @type {Vector2D}
                     */
                    const offset = this.cellToCanvasCoordinates(cell, imageBitmap);

                    if (this.isDrawable(cell)) {
                        this.drawImageBitmap(imageBitmap, offset);
                    }
                }
            });
    }
}