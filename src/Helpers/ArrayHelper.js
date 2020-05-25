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
}