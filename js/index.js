//declare colors
const worldBackground = "lightslategray"
const cellColor = "navy"
//declare speed
const generationSpeed = 100

//declare game world constants
const gameWorld = document.getElementById('gameWorld')
const context = gameWorld.getContext('2d')
const worldSize = 500
const worldScale = worldSize/40
const worldResolution = worldSize/worldScale




setupWorld() //setupWorldAndCells.js
generateCells()//setupWorldAndCells.js

//allows user to click on cells to create their own pattern

//radomly set cells true or false on click
const randomizeButton = document.getElementById("randomize")
const randomize = () => {
    for(y = 0; y < worldResolution; y++) {
        for(x = 0; x < worldResolution; x++) {
            if (Math.random() < 0.33) {
                cells[x][y].living = true
            } else {
                cells[x][y].living = false
            }
        }
    }
    generateCells() //setupWorldAndCells.js
} 


//running the app when start/stop button is clicked
const startStopButton = document.getElementById("startStop")
let runSimInterval
const runSim = () => {
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
