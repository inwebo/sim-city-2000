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

            if(cell.getSize() === 1) {
                if(sprite.height > this._cellToBitmapDimensions.getY()*2) {
                    y -= (sprite.height - (this._cellToBitmapDimensions.getY() * 2)) - 1;
                }

                x -= 0;
            }

            if(cell.getSize() === 2) {
                if(sprite.height > this._cellToBitmapDimensions.getY()*2) {
                    y -= (sprite.height - (this._cellToBitmapDimensions.getY() * 2)) - 1;
                }

                x -= 16;
            }

            if(cell.getSize() === 3) {
                if(sprite.height > this._cellToBitmapDimensions.getY()*2) {
                    y -= (sprite.height - (this._cellToBitmapDimensions.getY() * 2) * 3) - 1;
                }

                x -= 32;
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
