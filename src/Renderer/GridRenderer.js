import RendererAbstract from "./RendererAbstract";
import {Vector2D} from "@inwebo/vector";

export default class GridRenderer extends RendererAbstract {

    /**
     * @param {Vector2D} vector
     */
    setViewOrigin(vector) {
        this._viewOrigin = vector;
    }

    /**
     * @param {Vector2D} vector
     */
    setCellDimensions(vector) {
        this._cellToBitmapDimensions = new Vector2D(vector.getX()/2, vector.getY()/2);
    }

    coordinatesToCanvas(cell, sprite = null) {
        let x = (cell.getIndex().getX() - cell.getIndex().getY()) * this._cellToBitmapDimensions.getX() + this._viewOrigin.getX();
        let y = (cell.getIndex().getX() + cell.getIndex().getY()) * this._cellToBitmapDimensions.getY() + this._viewOrigin.getY();

        if(sprite !== null) {

            // if(cell.getSize() > 1) {
            //     const newSize = cell.getSize() - 1;
            //     x -= newSize * this._cellToBitmapDimensions.getX();
            // }
            //
            // if(sprite.height > this._cellToBitmapDimensions.getY() * cell.getSize()) {
            //     // y -= (sprite.height - 32) - 1 + 8;
            // }

            const gtX = (sprite.width > this._cellToBitmapDimensions.getX() * 2);
            const gtY = (sprite.height > this._cellToBitmapDimensions.getY() * 2);

            console.log(sprite,gtX, gtY);

            if(gtY) {
                let offsetY = sprite.height - this._cellToBitmapDimensions.getY() * 2;
                console.log(offsetY);

                // y -= (offsetY - 1)/2;
            }


        }

        return new Vector2D(x, y);
    }

    _draw([grid, sprite]) {
        createImageBitmap(sprite.imgData)
            .then((imageBitmap) => {
                const cells = grid.getGenerator();
                for(const cell of cells) {
                    const offset = this.coordinatesToCanvas(cell);
                    if (this.isDrawable(cell)) {
                        this.drawImageBitmap(imageBitmap, offset);
                    }
                }
            });
    }
}
