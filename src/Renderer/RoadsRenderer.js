import AbstractRenderer from "./AbstractRenderer";

export default class RoadsRenderer extends AbstractRenderer {
    /**
     * @inheritDoc
     */
    isDrawable(cell = null) {
        return cell.hasRoad();
    }
}