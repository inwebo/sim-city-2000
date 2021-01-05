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
        this._cellToBitmapDimensions = new Vector2D(vector.getX(), vector.getY());
    }

    coordinatesToCanvas(cell, sprite = null) {
        let x = (cell.getIndex().getX() - cell.getIndex().getY()) * this._cellToBitmapDimensions.getX()/2 + this._viewOrigin.getX();
        let y = (cell.getIndex().getX() + cell.getIndex().getY()) * this._cellToBitmapDimensions.getY()/2 + this._viewOrigin.getY();

        if(sprite !== null) {
            if(cell.getSize() === 1) {
                y -= (sprite.height - (this._cellToBitmapDimensions.getY())) - 1;
                x -= (cell.getSize() - 1) *  this._cellToBitmapDimensions.getX() / 2;
            }

            if(cell.getSize() === 2) {
                y -= (sprite.height - (this._cellToBitmapDimensions.getY())) - 1;
                x -= (cell.getSize() - 1) *  this._cellToBitmapDimensions.getX() / 2;
            }

            if(cell.getSize() === 3) {
                y -= (sprite.height - (this._cellToBitmapDimensions.getY()) * 3) - 1;
                x -= (cell.getSize() - 1) *  this._cellToBitmapDimensions.getX() / 2;
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
