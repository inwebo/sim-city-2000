import {Grid as BaseGrid} from "@inwebo/grid.js";

export default class Grid extends BaseGrid {
    * getCellByType() {
        for(const cell of this.getGenerator()) {
            if(cell.getSize() !== null) {
                yield cell;
            }
        }
    }
}