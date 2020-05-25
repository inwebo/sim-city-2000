import {Renderer2D} from "@inwebo/render.js";

export default class rendererCell extends Renderer2D{
    _draw(...subject) {
        const s1 = subject[0][0];
        const s2 = subject[0][1];
        const s3 = subject[0][2];

        this.getCtx().putImageData(s1.imgData,0,0);
        this.getCtx().putImageData(s2.imgData,32,0);
        this.getCtx().putImageData(s3.imgData,64,0);
    }
}