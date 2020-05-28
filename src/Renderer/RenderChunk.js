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

                // ctx.drawImage(img, 32, 0) // impaire
                //
                // ctx.drawImage(img, 16, 8) // paire
                // ctx.drawImage(img, 48, 8) // paire
                //
                // ctx.drawImage(img, 0, 16)  // impaire
                // ctx.drawImage(img, 32, 16) // impaire
                // ctx.drawImage(img, 64, 16) // impaire
                //
                // ctx.drawImage(img, 16, 24) // paire
                // ctx.drawImage(img, 48, 24) // paire
                //
                // ctx.drawImage(img, 32, 32) // impaire

                const tile_width  = img.width;
                const tile_height = img.height;
                let offset_X = tile_width / 2; // 32
                let offset_Y = (tile_height - 1)/2; // 8
                let additive = true;
                let position = new Vector2D(tile_width, 0);
                let currentSize = 1;
                const cells = 9;
                const max   = Math.sqrt(cells);
                const loop  = max + (max-1);

                for(let i = 1; i <= loop; i++) {

                  if(i === max) {
                    additive = false;
                  }
                    // console.log(additive);
                  // ctx.drawImage(img,position.getX(), position.getY());

                    // console.log(position);

                  let tempPosition = position.clone();


                  for(let k=1; k<=currentSize; k++) {
                      ctx.drawImage(img,tempPosition.getX(), tempPosition.getY());
                      tempPosition.addX(tile_width);
                  }

                  if(i <= max && position.getX()>0 && additive) {
                      position.substractScalarX(tile_width/2);
                  } else {
                      position.addX(16);
                  }


                  // Row Y
                  position.addY(offset_Y);


                  if(additive) {
                      if(currentSize < max) {
                          currentSize +=1;
                      }
                  } else {
                    currentSize -=1;
                  }
                }
            });

    }
}