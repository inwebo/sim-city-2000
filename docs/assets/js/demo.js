import {RenderSprite, SpriteMap} from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader}    from '@inwebo/assetsloader.js'
import {Vector2D}        from '@inwebo/vector';

import Chunk from "../../../src/Chunk/Chunk";
import Grid from "../../../src/Grid/Grid";
import Sprite from "../../../src/Renderer/Sprite";

window.addEventListener("DOMContentLoaded", (event) => {
    const worldCanvas      = document.getElementById('world');

    const tilesSheet         = AssetsLoader.image('assets/img/tiles.png');
    const tilesJSONMap       = AssetsLoader.json("assets/img/tiles.json");

    const commercialsSheet   = AssetsLoader.image('assets/img/commercials.png');
    const commercialsJSONMap = AssetsLoader.json('assets/img/commercials.json');

    const infraSheet   = AssetsLoader.image('assets/img/infrastructures.png');
    const infraJSONMap = AssetsLoader.json('assets/img/infrastructures.json');

    // const tilesSheet   = AssetsLoader.image('assets/img/tile-cartesian-default.png');
    // const tilesJSONMap = AssetsLoader.json('assets/img/tile-cartesian-default.json');

    Promise.all([tilesSheet, tilesJSONMap, commercialsSheet, commercialsJSONMap, infraSheet, infraJSONMap])
        .then(([tilesSheet, tilesJSONMap, commercialsSheet, commercialsJSONMap, infraSheet, infraJSONMap]) => {
            // region city
            // const tilesOffScreenRender = new RenderOffScreen(worldCanvas, tilesSheet);
            // const tilesSpriteMap       = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());
            //
            // const infraOffScreenRender = new RenderOffScreen(worldCanvas, infraSheet);
            // const infraSpriteMap       = new SpriteMap(infraJSONMap, infraOffScreenRender.getCtx());
            //
            // const commercialsOffScreenRender = new RenderOffScreen(worldCanvas, commercialsSheet);
            // const commercialsSpriteMap       = new SpriteMap(commercialsJSONMap, commercialsOffScreenRender.getCtx());
            //
            // const size         = new Vector2D(10,10);
            //
            // const cells = new Grid(size);
            // const chunk                = new Chunk(size, cells);
            // const chunkRender          = new Grid(worldCanvas);
            //
            // // const roads       = new Roads(size, cells);
            // // const roadsRender = new Roads(worldCanvas);
            //
            // const spriteRender = new Sprite(worldCanvas);
            //
            // chunkRender.draw(chunk, tilesSpriteMap.get('tiles-1'));
            // // roadsRender.draw(roads, infraSpriteMap.get('right-to-left'));
            //
            // spriteRender.draw(commercialsSpriteMap.get('commercial-10'), cells.getCell(0,0));
            // spriteRender.draw(commercialsSpriteMap.get('commercial-15'), cells.getCell(2,1));
            // spriteRender.draw(commercialsSpriteMap.get('commercial-18'), cells.getCell(5,5));
            // spriteRender.draw(commercialsSpriteMap.get('commercial-1'), cells.getCell(1,1));
            // endregion

            // region
            // const tilesOffScreenRender = new RenderOffScreen(worldCanvas, tilesSheet);
            // const tilesSpriteMap       = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());
            // endregion

        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
