import {Vector2D} from "@inwebo/vector";

export default class CellToCanvas {

    /**
     * Sprite matrix to canvas
     * @param cell
     * @param width
     * @param height
     * @return {Vector2D}
     */
    static toCanvas(cell, width, height) {
        width  = (width  % 2 !== 0)  ? width - 1  : width;
        height = (height % 2 !== 0) ? height - 1 : height;

        let x  = width  * cell.getOrigin().getX();
        let y  = height * cell.getOrigin().getY();

        if(cell.getOrigin().getY() % 2 !== 0) {
            x += width / 2;
        }

        y -= (cell.getOrigin().getY() * (height / 2)) ;

        return new Vector2D(x, y);
    }
}