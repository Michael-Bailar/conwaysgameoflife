//declare colors
const worldBackground = "lightslategray"
const cellColor = "navy"
//declare speed
const generationSpeed = 200

//declare game world constants
const gameWorld = document.getElementById('gameWorld')
const context = gameWorld.getContext('2d')
const worldSize = 500
const worldScaleAmount = 50
const worldScale = worldSize/worldScaleAmount
const worldResolution = worldSize/worldScale






setupWorld() //setupWorldAndCells.js
generateCells()//setupWorldAndCells.js

// var canvas = document.getElementById("gameWorld")

gameWorld.addEventListener('click', () =>{
    const gridX = Math.ceil(((event.pageX - gameWorld.offsetLeft)/worldScale))-1
    const gridY = Math.ceil(((event.pageY - gameWorld.offsetTop)/worldScale))-1
    cells[gridX][gridY].living = true
    generateCells()
})

//radomly set cells true or false on click
const randomizeButton = document.getElementById("randomize")
const randomize = () => {
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

