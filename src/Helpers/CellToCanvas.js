import {Vector2D} from "@inwebo/vector";

export default class CellToCanvas {

    /**
     * Compute cell coordinates to canvas coordinates.
     *
     * @param {Cell} cell
     * @param {int}  width Image width
     * @param {int}  height Image height
     * @return {Vector2D}
     */
    static toCanvas(cell, width, height) {
        width  = (width  % 2 !== 0)  ? width - 1  : width;
        height = (height % 2 !== 0)  ? height - 1 : height;

        let x  = width  * cell.getOrigin().getX();
        let y  = height * cell.getOrigin().getY();

        if(cell.getOrigin().getY() % 2 !== 0) {
            x += width / 2;
        }

        y -= (cell.getOrigin().getY() * (height / 2)) ;

        return new Vector2D(x, y);
    }
}