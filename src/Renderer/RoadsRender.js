import {Vector2D} from "@inwebo/vector";
import AbstractRender from "./AbstractRender";
import Chunk from "../Chunk/Chunk";
import {Sprite} from "@inwebo/sprite.js";

export default class RoadsRender extends AbstractRender {
    /**
     * @param {Chunk} chunk
     * @param {Sprite} sprite
     * @private
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

    isDrawable(cell = null) {
        return cell.hasRoad();
    }
}