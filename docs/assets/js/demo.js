import {SpriteMap} from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader} from '@inwebo/assetsloader.js'
import {Vector2D} from '@inwebo/vector';
import GridRenderer from "../../../src/Renderer/GridRenderer";
import SpriteRenderer from "../../../src/Renderer/SpriteRenderer";

import Grid from "../../../src/Grid/Grid";
import Cell from "../../../src/Grid/Cell";
import populateGrid from "../../../src/World/PopulateBuildings"

import conf from "../../../src/config.json"
import {Cartesian} from "@inwebo/grid.js";

window.addEventListener("DOMContentLoaded", (event) => {
    const worldCanvas  = document.getElementById('world');

    const tilesSheet         = AssetsLoader.image('assets/img/tiles.png');
    const tilesJSONMap       = AssetsLoader.json("assets/img/tiles.json");

    const infraTilesSheet   = AssetsLoader.image('assets/img/infrastructures.png');
    const infraTilesJSONMap = AssetsLoader.json('assets/img/infrastructures.json');

    const commercialsSheet   = AssetsLoader.image('assets/img/commercials.png');
    const commercialsJSONMap = AssetsLoader.json('assets/img/commercials.json');



    Promise.all([tilesSheet, tilesJSONMap, infraTilesSheet, infraTilesJSONMap, commercialsSheet, commercialsJSONMap])
        .then(([tilesSheet, tilesJSONMap, infraTilesSheet, infraTilesJSONMap, commercialsSheet, commercialsJSONMap]) => {
            // region

            const tilesOffScreenRender = new RenderOffScreen(worldCanvas, tilesSheet);
            const tilesSpriteMap       = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());

            const size                 = new Vector2D(4,4);

            const grid = new Grid(size, null, ([x, y]) => {
                return new Cell(new Vector2D(x, y));
            });

            const cellDimensions = new Vector2D(32, 16);



            // region populate
            // while (grid.assertCells((cell) => {
            //     return cell.getType() === null;
            // }) !== false) {
            //     const start = grid.assertCells((cell) => {
            //         return cell.getType() === null;
            //     });
            //
            //     populateGrid(grid, start);
            // }
            // endregion

            const gridRenderer = new GridRenderer(worldCanvas, new Cartesian());


            const viewOrigin = new Vector2D(212, 356/2);

            console.log(viewOrigin);

            gridRenderer.setViewOrigin(viewOrigin);
            gridRenderer.setCellDimensions(cellDimensions);
            gridRenderer.draw(grid, tilesSpriteMap.get('tiles-1'));



            // region merdasse
            // const buildable = grid.getCellByType();

            const commercialsOffScreenRender = new RenderOffScreen(worldCanvas, commercialsSheet);
            const commercialsSpriteMap       = new SpriteMap(commercialsJSONMap, commercialsOffScreenRender.getCtx());
            const spriteRender               = new SpriteRenderer(worldCanvas, new Cartesian());

            const c = grid.getCell(0,1);
            c.setSize(3);

            // grid.getCell(0,0).setSize(2);
            spriteRender.setCellDimensions(cellDimensions);
            spriteRender.setViewOrigin(viewOrigin);
            spriteRender.draw(commercialsSpriteMap.get('commercial-21'), c);


            // console.log(commercialsSpriteMap.get('commercial-15'));

            // for(const building of buildable) {
                // if(building.getSize() === 1) {
                //     spriteRender.draw(commercialsSpriteMap.get('commercial-1'), building);
                // }
                //
                // if(building.getSize() === 2) {
                //     spriteRender.draw(commercialsSpriteMap.get('commercial-10'), building);
                // }
                //
                // if(building.getSize() === 3) {
                //     spriteRender.draw(commercialsSpriteMap.get('commercial-20'), building);
                // }
            // }
            // endregion
        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
