import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import {Sprite} from "@inwebo/sprite.js";
import Chunk from "../Chunk/Chunk"

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


    /**
     * @param {Chunk} chunk
     * @param {Sprite} sprite
     * @private
     */
    _draw([chunk, sprite]) {
        createImageBitmap(sprite.imgData)
            .then((img) => {
                for (let y = 0; y < chunk.getDimensions().getY(); y++) {
                    const offsetX = (y % 2 !== 0) ? this.getOffsetX(img.width) : 0;

                    let offsetY = 0;

                    if(y !== 0) {
                        // console.log(img.width/4)
                        offsetY += 8 * y;
                    }

                    for (let x = 0; x < chunk.getDimensions().getX(); x++) {
                        // canvas relative
                        const originX = (x * img.width + offsetX) + chunk.getOrigin().getX();
                        const originY = (y * (img.height - 1) - offsetY) + chunk.getOrigin().getY();

                        chunk.getCell(x, y).setOrigin(new Vector2D(originX, originY));

                        this.getCtx().drawImage(
                            img,
                            originX,
                            originY
                        );
                    }
                }
            });
    }
}