import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import CellToCanvas from "../Helpers/CellToCanvas";
import Chunk from "../Chunk/Chunk";
import {Sprite} from "@inwebo/sprite.js";
export default class AbstractRender extends Renderer2D {

    /**
     * @param {Chunk} chunk
     * @return {Generator<Cell>}
     */
    getGenerator(chunk) {
        return  chunk.getCells().getGenerator();
    }

    /**
     * Convert Cell index [x,y] to canvas coordinate [x+n, y+m]
     * @param {Cell}        cell cell.getIndex()
     * @param {ImageBitmap} imageBitmap
     *
     * @return {Vector2D}
     */
    cellToCanvasCoordinates(cell, imageBitmap) {
        return CellToCanvas.toCanvas(cell, imageBitmap.width, imageBitmap.height);
    }

    /**
     * Is current cell or nullable element, drawable ?, it comes from a chunk generator
     *
     * @param {Cell|null|*} cell
     * @return {boolean}
     */
    isDrawable(cell = null) {
        return true;
    }

    /**
     * Draw imgData to canvas's coordinate offset
     *
     * @param {ImageBitmap}   imageBitmap
     * @param {Vector2D|null} offset  canvas's offset coordinate, default no offset
     */
    drawImageBitmap(imageBitmap, offset = null) {
        const origin = offset || new Vector2D();
        this.getCtx().drawImage(
            imageBitmap,
            origin.getX(),
            origin.getY()
        );
    }

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
}