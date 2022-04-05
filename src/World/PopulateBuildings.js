import rand from "../Helpers/Rand";
import conf from "../config.json";

const populateGrid = (grid, start) => {

    const rows = grid.getRow(start.getIndex().getY(), start.getIndex().getY());
    const cols = grid.getCol(start.getIndex().getX(), start.getIndex().getX());

    let freeX = 0;
    let freeY = 0;

    for(const cell of rows) {
        if(cell.getType() !== null) {
            break;
        }
        freeX += 1;
    }

    for(const cell of cols) {
        if(cell.getType() !== null) {
            break;
        }
        freeY += 1;
    }

    let _currentMax = ((freeX > freeY) ? freeY : freeX);
    _currentMax = (_currentMax > conf.BUILDINGS.SIZE) ? conf.BUILDINGS.SIZE : _currentMax;

    const maxRand = rand(1, _currentMax);

    const type = (rand(1, 2) %2 ===0) ? conf.BUILDINGS.TYPES[0]: conf.BUILDINGS.TYPES[1];

    start.setSize(maxRand);


    for(let x = 0; x < maxRand; x++) {
        for(let y = 0; y < maxRand; y++) {
            if(x <= maxRand && y <= maxRand) {
                grid.getCell(start.getIndex().getX() + x, start.getIndex().getY() + y).setType(type);
            }
        }
    }
};

export default populateGrid;