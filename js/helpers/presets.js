const pulsarPreset = () => {
    clearCells()
    generation = 0
    setGenerationDisplay()
    worldScaleAmount = 25
    worldScale = worldSize/worldScaleAmount
    worldResolution = worldSize/worldScale
    setGridSizeDisplay()
    setupWorld()
    createCells()
    generateCells()
    


    cells[6][7].living = true
    cells[6][8].living = true
    cells[6][9].living = true
    cells[6][13].living = true
    cells[6][14].living = true
    cells[6][15].living = true
    cells[11][7].living = true
    cells[11][8].living = true
    cells[11][9].living = true
    cells[11][13].living = true
    cells[11][14].living = true
    cells[11][15].living = true
    cells[13][7].living = true
    cells[13][8].living = true
    cells[13][9].living = true
    cells[13][13].living = true
    cells[13][14].living = true
    cells[13][15].living = true
    cells[18][7].living = true
    cells[18][8].living = true
    cells[18][9].living = true
    cells[18][13].living = true
    cells[18][14].living = true
    cells[18][15].living = true
    cells[8][5].living = true
    cells[8][10].living = true
    cells[8][12].living = true
    cells[8][17].living = true
    cells[9][5].living = true
    cells[9][10].living = true
    cells[9][12].living = true
    cells[9][17].living = true
    cells[10][5].living = true
    cells[10][10].living = true
    cells[10][12].living = true
    cells[10][17].living = true
    cells[14][5].living = true
    cells[14][10].living = true
    cells[14][12].living = true
    cells[14][17].living = true
    cells[15][5].living = true
    cells[15][10].living = true
    cells[15][12].living = true
    cells[15][17].living = true
    cells[16][5].living = true
    cells[16][10].living = true
    cells[16][12].living = true
    cells[16][17].living = true

    generateCells()

    //[6,11,13,18][7,8,9,13,14,15]
    //[8,9,10,14,15,16][5,10,12,17]
}

const toadPreset = () => {
    clearCells()
    generation = 0
    setGenerationDisplay()
    worldScaleAmount = 25
    worldScale = worldSize/worldScaleAmount
    worldResolution = worldSize/worldScale
    setGridSizeDisplay()
    setupWorld()
    createCells()
    generateCells()

    cells[11][11].living = true
    cells[12][11].living = true
    cells[13][11].living = true
    cells[12][10].living = true
    cells[13][10].living = true
    cells[14][10].living = true

    generateCells()
}

const spaceshipPreset = () => {
    clearCells()
    generation = 0
    setGenerationDisplay()
    worldScaleAmount = 25
    worldScale = worldSize/worldScaleAmount
    worldResolution = worldSize/worldScale
    setGridSizeDisplay()
    setupWorld()
    createCells()
    generateCells()

    cells[3][10].living = true
    cells[4][10].living = true
    cells[5][10].living = true
    cells[6][10].living = true
    cells[2][11].living = true
    cells[2][13].living = true
    cells[5][13].living = true
    cells[6][12].living = true
    cells[6][11].living = true
    
    generateCells()
}