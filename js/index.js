//declare colors
const worldBackground = "lightslategray"
const cellColor = "navy"
//declare speed
const generationSpeed = 100

//declare game world constants
const gameWorld = document.getElementById('gameWorld')
const context = gameWorld.getContext('2d')
const worldSize = 800
const worldScale = worldSize/40
const worldResolution = worldSize/worldScale

//grabbing these functions from their respective js files
setupWorld() //setupWorldAndCells.js
randomFill() //randomFill.js
generateCells() //setupWorldAndCells.js


const startStop = document.getElementById("startStop")
let runSimInterval

//running the app with predefined speed
const runSim = () => {
    if (startStop.classList.contains("off")) {
        startStop.classList.remove("off")
        startStop.classList.add("on")
        runSimInterval = setInterval(advanceGeneration, generationSpeed)
    } else {
        startStop.classList.remove("on")
        startStop.classList.add("off")
        clearInterval(runSimInterval)
    }
}
