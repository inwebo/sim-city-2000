import {Vector2D} from "@inwebo/vector";

export default class CoordinatesHelper {
    static coordinatesToCanvas(x, y, imageData) {
        const cell = new Vector2D(32, 17);

        let offset_X = null;
        let offset_Y = null;

        if (x % 2 === 0) {
            offset_X = (cell.getX() * x) / 2;
            offset_Y = (cell.getY() * y) - imageData.height;
        } else {
            offset_X = (cell.getX() * x) / 2;
            offset_Y = ((cell.getY() * y) - imageData.height) - Math.ceil(cell.getY() / 2);
        }

        return new Vector2D(offset_X, offset_Y);
    }
}