import {Renderer2D} from "@inwebo/render.js";

export default class RenderTerrain extends Renderer2D {
    /**
     * @see https://stackoverflow.com/questions/11611549/transparent-pixels-using-html5-canvas-and-getimagedata
     * @param subject
     * @private
     */
    _draw(...subject) {
        const tile_1        = subject[0][0];
        const tile_2        = subject[0][1];
        const tile_Width    = tile_1.imgData.width;
        const tile_Height   = tile_1.imgData.height;

        const canvas_width  = this._canvas.width;
        const canvas_height = this._canvas.height;

        const widthTiles  = Math.ceil(canvas_width / tile_Width);
        const heightTiles = Math.ceil(canvas_height / tile_Height);

        for (let x = 0 - tile_Width + 2; x <= widthTiles; x++) {
            for (let y = 0 - tile_Height +2; y <= heightTiles; y++) {
                const originX = x * tile_Width;
                const originY = y * tile_Height;
                createImageBitmap(tile_2.imgData).then(img => this.getCtx().drawImage(img,originX,originY));
            }
        }

        // for (let x = 0 - tile_Width + 2; x <= widthTiles; x++) {
        //     for (let y = 0 - tile_Height; y <= heightTiles; y++) {
        //
        //         const offsetX = Math.ceil(tile_Width / 2);
        //         const offsetY = Math.ceil(tile_Height / 2);
        //
        //         const originX = (x * tile_Width) - offsetX;
        //         const originY = (y * tile_Height) - offsetY;
        //
        //         createImageBitmap(tile_1.imgData).then(img => this.getCtx().drawImage(img,originX,originY));
        //     }
        // }



    }
}