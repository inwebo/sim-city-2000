import {RenderSprite, SpriteMap} from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader}    from '@inwebo/assetsloader.js'
import {Vector2D}        from '@inwebo/vector';

import Chunk from "../../../src/Chunk/Chunk";
import RenderChunk from "../../../src/Renderer/RenderChunk";
import rand from "../../../src/Helpers/Rand.js";
import Roads from "../../../src/World/Roads";
import RoadsRender from "../../../src/Renderer/RoadsRender";
import Cells from "../../../src/Cell/Cells";
import SpriteRender from "../../../src/Renderer/SpriteRender";

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

            const commercialsOffScreenRender = new RenderOffScreen(worldCanvas, commercialsSheet);
            const commercialsSpriteMap       = new SpriteMap(commercialsJSONMap, commercialsOffScreenRender.getCtx());

            const size         = new Vector2D(5,15);

            const cells = new Cells(size);
            const chunk                = new Chunk(size, cells);
            const chunkRender          = new RenderChunk(worldCanvas);

            const roads       = new Roads(size, cells);
            const roadsRender = new RoadsRender(worldCanvas);

            const spriteRender = new SpriteRender(worldCanvas);


            chunkRender.draw(chunk, tilesSpriteMap.get('tiles-1'));
            roadsRender.draw(roads, infraSpriteMap.get('right-to-left'));

            spriteRender.draw(commercialsSpriteMap.get('commercial-10'), cells.getCell(1,1));
            // spriteRender.draw(commercialsSpriteMap.get('commercial-1'), cells.getCell(1,1));

        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
