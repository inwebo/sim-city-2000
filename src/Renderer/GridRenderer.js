import RendererAbstract from "./RendererAbstract";
import {Vector2D} from "@inwebo/vector";

export default class GridRenderer extends RendererAbstract {


    coordinatesToCanvas(cell, sprite = null) {
        // @todo
        const OFFSET = new Vector2D(32, 16);
        // @todo
        const ORIGIN = new Vector2D(212, 356/2);

        const x = (cell.getIndex().getX() - cell.getIndex().getY()) * 16 + ORIGIN.getX();
        const y = (cell.getIndex().getX() + cell.getIndex().getY()) * 8 + ORIGIN.getY();

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
