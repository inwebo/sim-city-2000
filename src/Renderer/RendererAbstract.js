import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import CellToCanvas from "../Helpers/CellToCanvas";
import Chunk from "../Chunk/Chunk";
import {Sprite} from "@inwebo/sprite.js";
import {CoordinatesAbstract, Cell} from "@inwebo/grid.js";

export default class RendererAbstract extends Renderer2D {

    /**
     * @param {Chunk} chunk
     * @return {Generator<Cell>}
     */
    getGenerator(chunk) {
        return chunk.getCells().getGenerator();
    }

    /**
     * @returns {CoordinatesAbstract}
     */
    getCoordinatesAdapter() {
        return this._coordinateAdapter;
    }

    /**
     * @param {HTMLCanvasElement|HTMLElement|OffscreenCanvas} canvas
     * @param {CoordinatesAbstract} coordinatesAdapter
     */
    constructor(canvas, coordinatesAdapter) {
        super(canvas);
        this._coordinateAdapter = coordinatesAdapter;
    }

    /**
     * Convert GridRenderer index [x,y] to canvas coordinate [x+n, y+m]
     * @param {Cell}        cell cell.getIndex()
     * @param {ImageBitmap} imageBitmap
     *
     * @return {Vector2D|boolean}
     */
    cellToCanvasCoordinates(cell, imageBitmap) {
        if(cell !== false) {
            return CellToCanvas.toCanvas(cell, imageBitmap.width, imageBitmap.height);
        }

        return false;
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
     * Main loop cell function drawing with CanvasRenderingContext2D.drawImage()
     *
     * @param {Grid} chunk
     * @param {Sprite} sprite
     * @see https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage
     * @private
     */
    _draw([grid, sprite]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {
                /**
                 * @type {Generator<Cell>}
                 */
                const cells = grid.getGenerator();

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
