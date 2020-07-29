//declare colors
const worldBackground = "lightslategray"
const cellColor = "navy"
//declare speed
const generationSpeed = 50
let generation = 0

//declare game world constants
const gameWorld = document.getElementById('gameWorld')
const context = gameWorld.getContext('2d')
const worldSize = 500
const worldScaleAmount = 25
const worldScale = worldSize/worldScaleAmount
const worldResolution = worldSize/worldScale






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
