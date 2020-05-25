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

    static diagonal(array) {
        // var Ylength = array.length;
        var Ylength = 3;
        // var Xlength = array[0].length;
        var Xlength = 3;
        var maxLength = Math.max(Xlength, Ylength);

        const length = Math.sqrt(array.length);

        // console.log(maxLength);

        const buffer = [];



        for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
            for (let y = Ylength - 1; y >= 0; --y) {
                const x = k - y;
                if (x >= 0 && x < Xlength) {
                    const index = ArrayHelper.vectorToIndex(new Vector2D(3), new Vector2D(x,y));

                    buffer.push(array[index]);
                }
            }
        }

        return buffer;
    }
}