//declare colors
const worldBackground = "lightslategray"
const cellColor = "navy"
//declare speed
let generationSpeed = 50
let generation = 0

//declare game world constants
const gameWorld = document.getElementById('gameWorld')
const context = gameWorld.getContext('2d')
const worldSize = 500
//number of cells wide
let worldScaleAmount = 25
let worldScale = worldSize/worldScaleAmount
let worldResolution = worldSize/worldScale

setupWorld() //setupWorldAndCells.js
generateCells()//setupWorldAndCells.js

//radomly set cells true or false on click
const randomizeButton = document.getElementById("randomize")
const randomize = () => {
    generation = 0
    for(y = 0; y < worldResolution; y++) {
        for(x = 0; x < worldResolution; x++) {
            if (Math.random() < 0.33) {
                //fill the cell
                cells[x][y].living = true
            } else {
                //clear the cell
                cells[x][y].living = false
            }
        }
    }
    if(startStopButton.classList.contains("on")) {
        startStopButton.classList.remove("on")
        startStopButton.classList.add("off")
        clearInterval(runSimInterval)
    }
    setGenerationDisplay()
    generateCells() //setupWorldAndCells.js
} 


//running the game when start/stop button is clicked
const startStopButton = document.getElementById("startStop")
let runSimInterval
const startStopToggle = () => {
    if (startStopButton.classList.contains("off")) {
        startStopButton.classList.remove("off")
        startStopButton.classList.add("on")
        runSimInterval = setInterval(advanceGeneration, generationSpeed)
    } else {
        startStopButton.classList.remove("on")
        startStopButton.classList.add("off")
        clearInterval(runSimInterval)
    }
}

// adds ability to click on the grid to set cells on and off if not running
gameWorld.addEventListener('click', () =>{
    const gridX = Math.ceil(((event.pageX - gameWorld.offsetLeft)/worldScale))-1
    const gridY = Math.ceil(((event.pageY - gameWorld.offsetTop)/worldScale))-1
    if(startStopButton.classList.contains("off")) {
        if(cells[gridX][gridY].living === true) {
            cells[gridX][gridY].living = false
        } else {
            cells[gridX][gridY].living = true
        }
        
        generateCells()
    }
})

//clear the game world
const clearCells = () => {
    for(y = 0; y < worldResolution; y++) {
        for(x = 0; x < worldResolution; x++) {
            cells[x][y].living = false
        }
    }
    if(startStopButton.classList.contains("on")) {
        startStopButton.classList.remove("on")
        startStopButton.classList.add("off")
        clearInterval(runSimInterval)
    }
    generation = 0
    setGenerationDisplay()
    generateCells()
}

//set the generation display on the page
let generationDisplay = document.getElementById("generationDisplay")
const setGenerationDisplay = () => {
    generationDisplay.innerHTML = `Generation: ${generation}`
}
setGenerationDisplay()

//set the grid size display on the page
let gridSizeDisplay = document.getElementById("gridSizeDisplay")
const setGridSizeDisplay = () => {
    gridSizeDisplay.innerHTML = `Grid Size: ${worldScaleAmount} x ${worldScaleAmount}`
}
setGridSizeDisplay()

//increase the number of cells 
const increaseGridSize = () => {
    if (worldScaleAmount < 100) {
        worldScaleAmount = worldScaleAmount + 1
        worldScale = worldSize/worldScaleAmount
        worldResolution = worldSize/worldScale
        setupWorld()
        generateCells()
        generation = 0
        setGridSizeDisplay()
        console.log(worldScaleAmount)
    }
}
//decrease the number of cells
const decreaseGridSize = () => {
    if (worldScaleAmount > 10) {
        worldScaleAmount -= 1
        worldScale = worldSize/worldScaleAmount
        worldResolution = worldSize/worldScale
        setupWorld()
        generateCells()
        generation = 0
        setGridSizeDisplay()
        console.log(worldScaleAmount)
    }
}

//increase the generations by one
const stepForward = () => {
    advanceGeneration()
}

//increase speed by a tenth of a second
const speedUp = () => {
    if(generationSpeed > 20) {
        generationSpeed -= 10
    }
    startStopToggle()
    startStopToggle()
    console.log(generationSpeed)
}
//decrease speed by a tenth of a second
const slowDown = () => {
    if(generationSpeed < 3000) {
        generationSpeed += 10
    }
    startStopToggle()
    startStopToggle()
    console.log(generationSpeed)
}