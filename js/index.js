//declare colors
const worldBackground = "lightslategray"
const cellColor = "navy"
//declare speed
const generationSpeed = 500

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


//running the app with predefined speed
const runSim = () => {
    setInterval(advanceGeneration, generationSpeed)
}