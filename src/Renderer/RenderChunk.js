import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import ArrayHelper from "../Helpers/ArrayHelper";

export default class RenderChunk extends Renderer2D {

    constructor(canvas) {
        super(canvas);
        this._bufferImg = null;
    }

    /**
     * @param {number} width
     */
    getOffsetX(width) {
        return width / 2;
    }

    /**
     * @param {number} height
     */
    getOffsetY(height) {
       return  (height - 1) / 2;
    }

    _draw([chunk, sprite]) {
        createImageBitmap(sprite.imgData)
            .then((img) => {

                const rowWidth  = img.width * chunk.getDimensions().getX();
                const rowHeight = this.getOffsetY(img.height);

                const rowRender = new OffscreenCanvas(rowWidth, rowHeight);


                for (let y = 0; y < chunk.getDimensions().getY(); y++) {
                    this._canvas.getContext('bitmaprenderer').transferFromImageBitmap(this.getOffScreenImageBitmap());
                    // rowRender.getContext('2d').putImageData(img, y * img.width, 0);
                }


                for (let y = 0; y < chunk.getDimensions().getY(); y++) {
                    const offsetX = (y % 2 !== 0) ? this.getOffsetX(img.width) : 0;
                    const offsetY = (y % 2 !== 0) ? this.getOffsetY(img.height) : 0;


                    for (let x = 0; x < chunk.getDimensions().getX(); x++) {
                        this.getCtx().drawImage(img, x * img.width + offsetX, y * (img.height - 1) - offsetY);
                    }
                }
            });
    }
}