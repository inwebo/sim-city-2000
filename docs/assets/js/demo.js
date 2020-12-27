import {SpriteMap} from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader} from '@inwebo/assetsloader.js'
import {Vector2D} from '@inwebo/vector';
import GridRenderer from "../../../src/Renderer/GridRenderer";
import Chunk from "../../../src/Chunk/Chunk";
import {Grid} from "@inwebo/grid.js";


window.addEventListener("DOMContentLoaded", (event) => {
    const worldCanvas  = document.getElementById('world');
    const tilesSheet   = AssetsLoader.image('assets/img/tile-cartesian-default.png');
    const tilesJSONMap = AssetsLoader.json('assets/img/tile-cartesian-default.json');

    Promise.all([tilesSheet, tilesJSONMap])
        .then(([tilesSheet, tilesJSONMap]) => {

            // region
            const tilesOffScreenRender = new RenderOffScreen(worldCanvas, tilesSheet);
            const tilesSpriteMap       = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());

            const size                 = new Vector2D(10,10);
            const cells                = new Grid(size);
            const chunk                = new Chunk(size, cells);

            const gridRenderer = new GridRenderer(worldCanvas);
            gridRenderer.draw(chunk, tilesSpriteMap.get('tile-1'));
            // endregion

        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
