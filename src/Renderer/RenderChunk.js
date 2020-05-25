import {Renderer2D} from "@inwebo/render.js";

export default class RenderChunk extends Renderer2D {

    constructor(canvas) {
        super(canvas);
        this._chunkImg = null;
    }

    _draw(...subject) {
        const chunk  = subject[0][0];
        const sprite = subject[0][1].get('tiles-1');

        const matrixSize = Math.sqrt(chunk.getCells().length);

        const width  = (sprite.imgData.width) * matrixSize;
        const height = (sprite.imgData.height - 1) * matrixSize;

        const offscreenCanvas = new OffscreenCanvas(width, height);
    }
}