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

        createImageBitmap(sprite.imgData)
            .then((img) => {

                const ctx = document.getElementById('world').getContext('2d');

                const tile_width  = img.width;
                const tile_height = img.height;
                const offset_X = tile_width / 2;
                const offset_Y = (tile_height - 1)/2;
                let additive = true;

                let currentSize = 1;
                const cells = 16;
                const max   = Math.floor(Math.sqrt(cells));
                const loop  = max + (max-1);

              let position = new Vector2D(max*tile_width, loop*tile_height);

                for(let i = 1; i <= loop; i++) {

                  if(i === max) {
                    additive = false;
                  }

                  let tempPosition = position.clone();

                  for(let k=1; k<=currentSize; k++) {
                      ctx.drawImage(img,tempPosition.getX(), tempPosition.getY());
                      tempPosition.addX(tile_width);
                  }

                  if(i <= max && additive) {
                      position.substractScalarX(offset_X);
                  } else {
                      position.addX(16);
                  }

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