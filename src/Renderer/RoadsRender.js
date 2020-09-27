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


        console.log('To canvas', offsetX, offsetY);

        // cell.setOrigin(new Vector2D(x, y));
        console.log(cell.getOrigin());

        return new Vector2D();
    }

    _draw([chunk, sprite]) {

        createImageBitmap(sprite.imgData)
            .then((img) => {
                for (let y = 0; y < chunk.getDimensions().getY(); y++) {
                    // const offsetX = (y % 2 !== 0) ? this.getOffsetX(img.width) : 0;
                    // const offsetX = (y % 2 !== 0) ? this.getOffsetX(img.width)  : 0;
                    // const offsetX = 0;
                    let offsetY = 0;

                    if(y !== 0) {
                        // console.log(img.width/4)
                        offsetY += 8 * y;
                    }

                    for (let x = 0; x < chunk.getDimensions().getX(); x++) {
                        // const offsetX = this.getOffsetX(img.width) * -1 * x;
                        // if(x%2 !== 0) {
                        //     const offsetX =  this.getOffsetX(img.width) * -1 * x;
                        // } else {
                        //     const offsetX =  this.getOffsetX(img.width) * -1 * x;
                        // }

                        const offsetX =  this.getOffsetX(img.width) * -1 * x;


                        // canvas relative
                        const originX = (x * img.width + offsetX) + chunk.getOrigin().getX();
                        const originY = (y * (img.height - 1) - offsetY) + chunk.getOrigin().getY();

                        // console.log(this.cellToCanvasCoordinates(chunk.getCell(x,y)));

                        // chunk.getCell(x, y).setOrigin(new Vector2D(originX, originY));

                        // console.log(chunk.getCell(x,y).getOrigin().getX());
                        // console.log(chunk.getCell(x,y).getOrigin().getY());

                        if(chunk.getCell(x,y).hasRoad()) {


                            // let c = chunk.getCell(x, y).getOrigin();
                            console.log('index', chunk.getCell(x, y).getIndex());
                            console.log('canvas origin', originX, originY);
                            this.cellToCanvasCoordinates( chunk.getCell(x, y), img);
                            // console.log(this.cellToCanvasCoordinates( chunk.getCell(x, y), img));
                            this.getCtx().drawImage(
                                img,
                                originX,
                                originY
                            );
                        }
                    }
                }
            });
    }
}