import {SpriteMap}       from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader}    from '@inwebo/assetsloader.js'
import {Vector2D}        from '@inwebo/vector';

import Chunk from "../../../src/Chunk/Chunk";
import RenderChunk from "../../../src/Renderer/RenderChunk";
import rand from "../../../src/Helpers/Rand.js";
import Roads from "../../../src/World/Roads";
import RoadsRender from "../../../src/Renderer/RoadsRender";
import Cells from "../../../src/Cell/Cells";

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

            const chunk                = new Chunk(new Vector2D(5,5), new Vector2D(0,0));
            const chunkRender          = new RenderChunk(worldCanvas);

            // const roads       = new Roads(new Vector2D(10,10), new Vector2D());
            // const roadsRender = new RoadsRender(worldCanvas);



            // console.log(roads.getGrid());

            chunkRender.draw(chunk, tilesSpriteMap.get('tiles-1'));
            // roadsRender.draw(roads, infraSpriteMap.get('right-to-left'));

            let cells = new Cells(new Vector2D(5,5));
            // console.log(cells);
            // console.log(cells.hasRow(9));
            // console.log(cells.hasCell(9, 12));
            console.log(cells.getCell(0, 0));
            console.log(cells.getCell(1, 0));
            console.log(cells.getCell(2, 0));
            // console.log(cells.indexToCanvas(0, 0));



        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
