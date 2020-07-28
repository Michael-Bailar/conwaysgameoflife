//moves forward one generation
const advanceGeneration = () => {
    let newCells = createCells()
    //looping through all rows and collumns and applying rules
    for(y = 0; y < worldResolution; y++) {
        for(x = 0; x < worldResolution; x++) {
            const neighbors = getNeighborCount(x, y)
            if(cells[x][y].living && neighbors >= 2 && neighbors <= 3) {
                newCells[x][y].living = true
            }
            else if(!cells[x][y].living && neighbors === 3) {
                newCells[x][y].living = true
            }
        }
    }
    cells = newCells
    generateCells()
}

//find nearby living cells
const getNeighborCount = (x, y) => {
    let count = 0
    /* looping through all rows and collumns and incrementing count
        if the cell is alive */
    for(yy = -1; yy < 2; yy++) {
        for(xx = -1; xx < 2; xx++){
            if(xx === 0 && yy ===0) {
                continue
            }
            if(x + xx < 0 || x + xx > worldResolution - 1) {
                continue
            }
            if(y + yy < 0 || y + yy > worldResolution - 1) {
                continue
            }
            if(cells[x + xx][y + yy].living) {
                count ++
            }
        }
    }
    return count
}