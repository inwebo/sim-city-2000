import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import CellToCanvas from "../Helpers/CellToCanvas";
import Chunk from "../Chunk/Chunk";

export default class AbstractRender extends Renderer2D {

    /**
     * @param {Chunk} chunk
     * @return {Generator<Cell>}
     */
    getGenerator(chunk) {
        return  chunk.getCells().getGenerator();
    }

    /**
     * @param {Cell}      cell
     * @param {ImageBitmap} imageBitmap
     *
     * @return {Vector2D}
     */
    cellToCanvasCoordinates(cell, imageBitmap) {
        return CellToCanvas.toCanvas(cell, imageBitmap.width, imageBitmap.height);
    }

    /**
     * Is current cell drawable, it comes from a chunk generator
     *
     * @param {Cell|null} cell
     * @return {boolean}
     */
    isDrawable(cell = null) {
        return true;
    }

    /**
     * @param {ImageBitmap} imgData
     *
     * @param {Vector2D|null} offset Canvas coordinate
     */
    drawImageBitmap(imgData, offset = null) {
        const origin = offset || new Vector2D();
        this.getCtx().drawImage(
            imgData,
            origin.getX(),
            origin.getY()
        );
    }
}