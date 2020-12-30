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

            const size                 = new Vector2D(9,9);

            const grid = new Grid(size, null, ([x, y]) => {
                return new Cell(new Vector2D(x, y));
            });

            while (grid.assertCells((cell) => {
                return cell.getType() === null;
            }) !== false) {
                const start = grid.assertCells((cell) => {
                    return cell.getType() === null;
                });

                populateGrid(grid, start);
            }

            // console.log(conf)
            // console.log(grid.getRows())

            const gridRenderer = new GridRenderer(worldCanvas, new Cartesian());
            gridRenderer.draw(grid, tilesSpriteMap.get('tiles-1'));

            const buildable = grid.getCellByType();
            // endregion

            const commercialsOffScreenRender = new RenderOffScreen(worldCanvas, commercialsSheet);
            const commercialsSpriteMap       = new SpriteMap(commercialsJSONMap, commercialsOffScreenRender.getCtx());
            const spriteRender               = new SpriteRenderer(worldCanvas, new Cartesian());

            grid.getCell(3,5).setSize(1);
            spriteRender.draw(commercialsSpriteMap.get('commercial-1'), grid.getCell(3,5));

            grid.getCell(0,0).setSize(2);
            spriteRender.draw(commercialsSpriteMap.get('commercial-15'), grid.getCell(0,0));
            grid.getCell(2,0).setSize(2);
            spriteRender.draw(commercialsSpriteMap.get('commercial-12'), grid.getCell(2,0));
            grid.getCell(6,6).setSize(2);
            spriteRender.draw(commercialsSpriteMap.get('commercial-13'), grid.getCell(6,6));

            grid.getCell(6,0).setSize(3);
            spriteRender.draw(commercialsSpriteMap.get('commercial-20'), grid.getCell(6,0));

            for(const building of buildable) {
                // if(building.getSize() === 1) {
                //     spriteRender.draw(commercialsSpriteMap.get('commercial-10'), building);
                // }
                //
                // if(building.getSize() === 2) {
                //     spriteRender.draw(commercialsSpriteMap.get('commercial-10'), building);
                // }
                //
                // if(building.getSize() === 3) {
                //     spriteRender.draw(commercialsSpriteMap.get('commercial-20'), building);
                // }
            }

        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
