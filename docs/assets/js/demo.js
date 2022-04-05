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
import rand from "@inwebo/graph.js/docs/assets/js/Rand";

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

            const size                 = new Vector2D(9,9);

            const grid = new Grid(size, null, ([x, y]) => {
                return new Cell(new Vector2D(x, y));
            });

            const cellDimensions = new Vector2D(32, 16);



            // region populate
            while (grid.assertCells((cell) => {
                return cell.getType() === null;
            }) !== false) {
                const start = grid.assertCells((cell) => {
                    return cell.getType() === null;
                });

                populateGrid(grid, start);
            }
            // endregion

            const gridRenderer = new GridRenderer(worldCanvas, new Cartesian());


            const viewOrigin = new Vector2D(212, 356/2);

            console.log(viewOrigin);

            gridRenderer.setViewOrigin(viewOrigin);
            gridRenderer.setCellDimensions(cellDimensions);
            gridRenderer.draw(grid, tilesSpriteMap.get('tiles-1'));



            // region merdasse
            const buildable = grid.getCellByType();

            const commercialsOffScreenRender = new RenderOffScreen(worldCanvas, commercialsSheet);
            const commercialsSpriteMap       = new SpriteMap(commercialsJSONMap, commercialsOffScreenRender.getCtx());
            const spriteRender               = new SpriteRenderer(worldCanvas, new Cartesian());
            spriteRender.setCellDimensions(cellDimensions);
            spriteRender.setViewOrigin(viewOrigin);


            // const c = grid.getCell(0,0);
            // c.setSize(1);
            //
            // // grid.getCell(0,0).setSize(2);
            // spriteRender.setCellDimensions(cellDimensions);
            // spriteRender.setViewOrigin(viewOrigin);
            // spriteRender.draw(commercialsSpriteMap.get('commercial-2'), c);
            //
            //
            // const c2 = grid.getCell(0,0);
            // c2.setSize(2);
            // spriteRender.draw(commercialsSpriteMap.get('commercial-11'), c2);
            //
            // const c3 = grid.getCell(1,0);
            // c3.setSize(3);
            // spriteRender.draw(commercialsSpriteMap.get('commercial-27'), c3);

            // console.log(commercialsSpriteMap.get('commercial-15'));

            for(const building of buildable) {
                console.log(building);
                if(building.getSize() === 1) {

                    const spriteNumber = rand(1,8);

                    spriteRender.draw(commercialsSpriteMap.get(`commercial-${spriteNumber}`), building);
                }

                if(building.getSize() === 2) {
                    console.log(building);
                    const spriteNumber = rand(9,28);
                    spriteRender.draw(commercialsSpriteMap.get(`commercial-${spriteNumber}`), building);
                }

                if(building.getSize() === 3) {
                    const spriteNumber = rand(19,29);
                    spriteRender.draw(commercialsSpriteMap.get(`commercial-${spriteNumber}`), building);
                }
            }
            // endregion
        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
