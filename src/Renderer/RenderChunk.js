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

        const offSetOrigin = chunk.getOrigin().clone();

        createImageBitmap(sprite.imgData)
            .then((img) => {
                for (let y = 0; y < chunk.getDimensions().getY(); y++) {
                    const offsetX = (y % 2 !== 0) ? this.getOffsetX(img.width) : 0;

                    let offsetY = 0;

                    if(y !== 0) {
                        offsetY += 8 * y;
                    }

                    for (let x = 0; x < chunk.getDimensions().getX(); x++) {
                        this.getCtx().drawImage(
                            img,
                            (x * img.width + offsetX) + offSetOrigin.getX(),
                            (y * (img.height - 1) - offsetY) + offSetOrigin.getY()
                        );
                    }
                }
            });
    }
}