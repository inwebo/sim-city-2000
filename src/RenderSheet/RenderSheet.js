import Renderer2D from "@inwebo/render.js/src/Renderer2D";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
 */
export default class RenderSheet extends Renderer2D {
    _draw(...subject) {
        /**
         * @type {Image}
         */
        const s = subject[0][0];
        this.getCtx().drawImage(s, 0, 0);
    }
}