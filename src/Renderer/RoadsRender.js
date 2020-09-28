import {Vector2D} from "@inwebo/vector";
import AbstractRender from "./AbstractRender";
import Chunk from "../Chunk/Chunk";
import {Sprite} from "@inwebo/sprite.js";

export default class RoadsRender extends AbstractRender {
    /**
     * @inheritDoc
     */
    isDrawable(cell = null) {
        return cell.hasRoad();
    }
}