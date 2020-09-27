import {SpriteMap}       from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader}    from '@inwebo/assetsloader.js'
import {Vector2D}        from '@inwebo/vector';

import Chunk from "../../../src/Chunk/Chunk";
import RenderChunk from "../../../src/Renderer/RenderChunk";
import rand from "../../../src/Helpers/Rand.js";
import Roads from "../../../src/World/Roads";
import RoadsRender from "../../../src/Renderer/RoadsRender";

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

            const chunk                = new Chunk(new Vector2D(100,100), new Vector2D(-32,-32));
            const chunkRender          = new RenderChunk(worldCanvas);

            const cells = chunk.getAdjacents(8,8, 1 );

            const randX = rand(0, chunk.getDimensions().getX());
            const randY = rand(0, chunk.getDimensions().getY());

            const xOrigin = new Vector2D(randX, 0);
            const yOrigin = new Vector2D(0,  randY);


            const xEnd = new Vector2D(randX, chunk.getDimensions().getX());
            const yEnd = new Vector2D( chunk.getDimensions().getY(), randY);

            // console.table([xOrigin, xEnd, yOrigin, yEnd])

            const roads       = new Roads(new Vector2D(100,100), new Vector2D());
            const roadsRender = new RoadsRender(worldCanvas);



            // console.log(roads.getGrid());

            chunkRender.draw(chunk, tilesSpriteMap.get('tiles-1'));
            roadsRender.draw(roads, infraSpriteMap.get('right-to-left'));

        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
