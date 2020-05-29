import {SpriteMap}       from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader}    from '@inwebo/assetsloader.js'
import {Vector2D}        from '@inwebo/vector';

import Chunk from "../../../src/Chunk/Chunk";
import RenderChunk from "../../../src/Renderer/RenderChunk";

window.addEventListener("DOMContentLoaded", (event) => {
    const worldCanvas      = document.getElementById('world');

    const tilesSheet         = AssetsLoader.image('assets/img/tiles.png');
    const tilesJSONMap       = AssetsLoader.json("assets/img/tiles.json");

    const commercialsSheet   = AssetsLoader.image('assets/img/commercials.png');
    const commercialsJSONMap = AssetsLoader.json('assets/img/commercials.json');

    const infraSheet   = AssetsLoader.image('assets/img/infrastructures.png');
    const infraJSONMap = AssetsLoader.json('assets/img/infrastructures.json');

    Promise.all([tilesSheet, tilesJSONMap, commercialsSheet, commercialsJSONMap, infraSheet, infraJSONMap])
        .then(([tilesSheet, tilesJSONMap, commercialsSheet, commercialsJSONMap, infraSheet, infraJSONMap]) => {

            const tilesOffScreenRender = new RenderOffScreen(worldCanvas, tilesSheet);
            const tilesSpriteMap       = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());

            const infraOffScreenRender = new RenderOffScreen(worldCanvas, infraSheet);
            const infraSpriteMap       = new SpriteMap(infraJSONMap, infraOffScreenRender.getCtx());

            const chunk                = new Chunk(new Vector2D(100,100), new Vector2D(-32,-32));
            const chunkRender          = new RenderChunk(worldCanvas);

            const cells = chunk.getAdjacents(8,8, 1 );

            console.log(cells);

            chunkRender.draw(chunk, tilesSpriteMap.get('tiles-1'));
        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
