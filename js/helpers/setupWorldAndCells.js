//generates a canvas to work with
const setupWorld = () => {
    gameWorld.width = gameWorld.height = worldSize
    context.scale(worldScale, worldScale)
    cells = createCells()
}
//this sets up the 2d array structure
const createCells = () => {
    let arr = new Array(worldResolution)
    for(x = 0; x < worldResolution; x++){
        let cols = new Array(worldResolution)
        for(y = 0; y < worldResolution; y++){
            cols[y] = {
                living:false,
                id: (`${x}x${y}`),
            }
        }
        arr[x] = cols
    }
    return arr
}

const generateCells = () => {
    //setting cell colors here
    context.fillStyle = worldBackground
    context.fillRect(0, 0, worldResolution, worldResolution)
    context.fillStyle = cellColor
    /*looping through each cell and setting color based on living
     or dead */
    for(y = 0; y < worldResolution; y++){
        for(x = 0; x < worldResolution; x++){
            if(cells[x][y].living) {
                context.fillRect(x,y,1,1)
            }
        }
    }
}


