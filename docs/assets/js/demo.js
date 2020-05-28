import {SpriteMap}       from '@inwebo/sprite.js' ;
import {RenderOffScreen} from '@inwebo/render.js';
import {AssetsLoader}    from '@inwebo/assetsloader.js'
import {Vector2D}        from '@inwebo/vector';

import CoordinatesHelper from "../../../src/Helpers/CoordinatesHelper";
import ArrayHelper       from '../../../src/Helpers/ArrayHelper'
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

            const tilesOffScreenRender       = new RenderOffScreen(worldCanvas, tilesSheet);
            const tilesSpriteMap             = new SpriteMap(tilesJSONMap, tilesOffScreenRender.getCtx());

            const commercialsOffScreenRender = new RenderOffScreen(worldCanvas, commercialsSheet);
            const commercialsSpriteMap       = new SpriteMap(commercialsJSONMap, commercialsOffScreenRender.getCtx());

          const infraOffScreenRender = new RenderOffScreen(worldCanvas, infraSheet);

          const infraSpriteMap = new SpriteMap(infraJSONMap, infraOffScreenRender.getCtx());

          // console.log(infraJSONMap.get('road-1'))


            const chunk = new Chunk(new Vector2D(1, 1));
            const renderChunk = new RenderChunk(worldCanvas);

            renderChunk.draw(chunk, tilesSpriteMap);



          createImageBitmap(infraSpriteMap.get('road-1').imgData)
            .then((img) => {
              worldCanvas.getContext('2d')
              .drawImage(img,176,64);
              worldCanvas.getContext('2d')
              .drawImage(img,288,32);
            })
        })
        .catch((err) => {
            console.log(err);
        })
    ;

    // tilesImg.src = tilesSrc;
    //
    //
    // const commercialsSrc = 'assets/img/commercials.png';
    // const commercialsImg = new Image();
    // commercialsImg.onload = (e)  => {
    //     const offScreenRender = new RenderOffScreen(worldCanvas, commercialsImg);
    //
    //     fetch("assets/img/commercials.json")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((json) => {
    //             try {
    //                 const spriteMap = new SpriteMap(json, offScreenRender.getCtx());
    //
    //
    //                 // const s = spriteMap.get('commercial-29');
    //                 // const c = CoordinatesHelper.coordinatesToCanvas(25, 22, s.imgData);
    //
    //                 // createImageBitmap(s.imgData)
    //                 //     .then(img => worldCanvas.getContext('2d')
    //                 //         .drawImage(img,c.getX(),c.getY()))
    //                 // ;
    //
    //                 const s2 = spriteMap.get('commercial-1');
    //                 const c2 = CoordinatesHelper.coordinatesToCanvas(2, 2, s2.imgData);
    //
    //                 createImageBitmap(s2.imgData)
    //                     .then(img => worldCanvas.getContext('2d')
    //                         .drawImage(img,c2.getX(),c2.getY()))
    //                 ;
    //
    //                 for(let x = 2; x < 40; x++) {
    //                     for(let y = 2; y <= 2; y++) {
    //                         let index = Math.floor(Math.random() * 10);
    //                         if(index === 0) { index = 1};
    //                         if(index === 9) { index = 8};
    //
    //                         index= 1;
    //
    //                         const s2 = spriteMap.get(`commercial-${index}`);
    //                         const c2 = CoordinatesHelper.coordinatesToCanvas(x, y, s2.imgData);
    //
    //                         createImageBitmap(s2.imgData)
    //                             .then(img => worldCanvas.getContext('2d')
    //                                 .drawImage(img,c2.getX(),c2.getY()))
    //                         ;
    //                     }
    //                 }
    //
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //         });
    // };
});
