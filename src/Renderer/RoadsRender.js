import RenderChunk from "./RenderChunk";
import {Vector2D} from "@inwebo/vector";

export default class RoadsRender extends RenderChunk {

    /**
     * @param {Cell} cell
     * @param {ImageBitmap} imageData
     * @return {Vector2D}
     */
    cellToCanvasCoordinates(cell, imageData) {

        let offsetX = 0;
        let offsetY = 0;

        if(cell.getIndex().getX() % 2 !== 0) {

        } else {

        }


        // console.log('To canvas', offsetX, offsetY);

        // cell.setOrigin(new Vector2D(x, y));
        // console.log(cell.getOrigin());

        return new Vector2D();
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

                        offsetY -= (cell.getOrigin().getY() * (imgHeight / 2)) ;


                        // console.log(offsetY);
                        if (cell.hasRoad()) {
                            this.getCtx().drawImage(
                                img,
                                offsetX,
                                offsetY
                            );
                        }
                    });
                });
            });
    }
}