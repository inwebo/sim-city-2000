import Abstract from "./Abstract";

export default class Roads extends Abstract {
    /**
     * @inheritDoc
     */
    isDrawable(cell = null) {
        return cell.hasRoad();
    }
}