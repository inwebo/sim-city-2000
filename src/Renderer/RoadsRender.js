import AbstractRender from "./AbstractRender";

export default class RoadsRender extends AbstractRender {
    /**
     * @inheritDoc
     */
    isDrawable(cell = null) {
        return cell.hasRoad();
    }
}