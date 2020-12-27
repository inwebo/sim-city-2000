import {Vector2D} from "@inwebo/vector";
import {Grid} from "@inwebo/grid.js";

onmessage((e)=>{
    const grid = new Grid(new Vector2D(25, 25));
    console.log(grid);
    postMessage(grid);
});