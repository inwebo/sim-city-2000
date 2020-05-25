import {Vector2D, Vector2DValidator} from "@inwebo/vector";

export default class ArrayHelper {

    /**
     * @param {Vector2D} arrayDimensions
     * @param {Vector2D} coordinates
     *
     * @return {number}
     */
    static vectorToIndex(arrayDimensions, coordinates) {
        Vector2DValidator.validate(arrayDimensions, coordinates);

        return coordinates.getX() + arrayDimensions.getX() * coordinates.getY();
    }

    /**
     * @param {Vector2D} arrayDimensions
     * @param {number} index
     * @return {Vector2D}
     */
    static indexToVector(arrayDimensions, index ) {
        Vector2DValidator.validate(arrayDimensions);

        const x = index % arrayDimensions.getX();
        const y = index / arrayDimensions.getX();

        return new Vector2D(x, y);
    }

    /**
     * @see https://stackoverflow.com/questions/35917734/how-do-i-traverse-an-array-diagonally-in-javascript
     * @param {Array} array
     * @return {[]}
     */
    static diagonal(array) {
        const length = Math.sqrt(array.length);
        const buffer = [];

        for (let k = 0; k <= 2 * (length - 1); ++k) {
            for (let y = length - 1; y >= 0; --y) {
                const x = k - y;
                if (x >= 0 && x < length) {
                    const index = ArrayHelper.vectorToIndex(new Vector2D(3), new Vector2D(x,y));
                    buffer.push(array[index]);
                }
            }
        }

        return buffer;
    }
}