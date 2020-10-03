import RendererAbstract from "./RendererAbstract";

export default class RoadsRenderer extends RendererAbstract {
    /**
     * @inheritDoc
     */
    isDrawable(cell = null) {
        return cell.hasRoad();
    }
}
