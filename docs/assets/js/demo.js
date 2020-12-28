import {SpriteMap} from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader} from '@inwebo/assetsloader.js'
import {Vector2D} from '@inwebo/vector';
import GridRenderer from "../../../src/Renderer/GridRenderer";
import Chunk from "../../../src/Chunk/Chunk";

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

    Promise.all([tilesSheet, tilesJSONMap, infraTilesSheet, infraTilesJSONMap])
        .then(([tilesSheet, tilesJSONMap, infraTilesSheet, infraTilesJSONMap]) => {
            // region

            const tilesOffScreenRender = new RenderOffScreen(worldCanvas, tilesSheet);
            const tilesSpriteMap       = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());

            const size                 = new Vector2D(10,10);

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

            console.log(conf)
            console.log(grid.getRows())

            const gridRenderer = new GridRenderer(worldCanvas, new Cartesian());
            gridRenderer.draw(grid, tilesSpriteMap.get('tiles-1'));

            const buildable = grid.getCellByType();
            for (const b of buildable) {
                console.log(b);
            }

            // endregion

        })
        .catch((err) => {
            console.log(err);
        })
    ;
});
