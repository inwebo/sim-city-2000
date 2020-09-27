import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";
import {Sprite} from "@inwebo/sprite.js";
import Chunk from "../Chunk/Chunk"

export default class RenderChunk extends Renderer2D {

    constructor(canvas) {
        super(canvas);
        this._bufferImg = null;
    }

    _draw([chunk, sprite]) {
        createImageBitmap(sprite.imgData)
            .then((img) => {

                const rows = chunk.getCells().getRows();

                rows.forEach((row) => {
                    row.forEach((cell) => {

                        let imgWidth = (img.width % 2 !== 0) ? img.width - 1 : img.width;
                        let imgHeight = (img.height % 2 !== 0) ? img.height - 1 : img.height;

                        let offsetX = imgWidth * cell.getOrigin().getX();
                        let offsetY = imgHeight * cell.getOrigin().getY() ;



                        if(cell.getOrigin().getY() % 2 !== 0) {
                            offsetX -= imgWidth / 2;
                        }

                        // console.log(cell.getOrigin().getY() * (imgHeight / 2));
                        offsetY -= (cell.getOrigin().getY() * (imgHeight / 2)) ;


                        // console.log(offsetY);

                        this.getCtx().drawImage(
                            img,
                            offsetX,
                            offsetY
                        );
                    });
                });

                // console.log(chunk.getCells().getCells());
                // chunk.getCells().getCells().forEach((cell) => {
                    // console.log(cell);
                    // this.getCtx().drawImage(
                    //     img,
                    //     cell.getOrigin().getX(),
                    //     cell.getOrigin().getY()
                    // );
                // });
            });
    }
}