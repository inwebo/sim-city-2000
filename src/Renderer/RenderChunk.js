import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import ArrayHelper from "../Helpers/ArrayHelper";

export default class RenderChunk extends Renderer2D {

    constructor(canvas) {
        super(canvas);
        this._chunkImg = null;
    }

    _draw(subject) {
        const chunk  = subject[0];
        const sprite = subject[1].get('tiles-1');

        const matrixSize = Math.sqrt(chunk.getCells().length);

        const dimension  = (sprite.imgData.width) * matrixSize;

        const offscreenCanvas = new OffscreenCanvas(dimension, dimension);

        // offscreenCanvas.getContext('2d').putImageData(sprite.imgData,0,0);

        // Construction sur off screen canvas

        // Dessin sur canvas world

        let startOrigin   = new Vector2D(dimension, 0);
        let currentOrigin = startOrigin.clone();



        createImageBitmap(sprite.imgData)
            .then((img) => {

                const ctx = document.getElementById('world').getContext('2d');

                // ctx.drawImage(img,0,16);
                //
                // ctx.drawImage(img,16,8);
                // ctx.drawImage(img,16,24);
                //
                // ctx.drawImage(img, 32,0);
                // ctx.drawImage(img, 32,16);
                // ctx.drawImage(img, 32,32);
                //
                // ctx.drawImage(img,48,8);
                // ctx.drawImage(img,48,24);
                //
                // ctx.drawImage(img,64,16);


                const tile_width  = img.width;
                const tile_height = img.height;

                let offset_X = 0;
                let offset_Y = 0;

                let additive = true;

                let position = new Vector2D(tile_width, 0);


                let currentSize = 1;

                const cells = 16;
                const maxRows = Math.sqrt(cells);
                const loop = maxRows*2;

console.log(cells, maxRows, loop);


                for(let i = 1; i < 6; i++) {
                    // console.log(currentSize);
                    if(i === 3) {
                        additive = false;
                    }


                    if(additive) {
                        currentSize += 1;
                    } else {
                        currentSize -= 1;
                    }

                    if(i%2 === 0) {
                        // Pas d'offset
                        for (let j; j <= currentSize; j++) {
                            // console.log(currentSize*img.width);
                        }
                    } else {
                        // Offset Y
                    }
                }

            });

    }
}