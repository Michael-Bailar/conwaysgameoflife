const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const numberOfCells = 25
canvas.width = 600
canvas.height = 600
const collumns = canvas.width /numberOfCells
const rows = canvas.height /numberOfCells
let grid = setupGrid()

function setupGrid() {
    return new Array(collumns).fill(null)
        .map(() => new Array(rows).fill(null)
            .map(() => Math.floor(Math.random() * 2)))
}

function createNextGeneration(grid) {
    const createNextGeneration = grid.map(arr => [...arr])

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row]
            let neighborCount = 0
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue
                    }
                    const cellX = col + i
                    const cellY = row + j
                    if (cellX < collumns && cellY < rows && cellX >= 0 && cellY >= 0) {
                        const currentNeighbour = grid[col + i] [row + j]
                        neighborCount += currentNeighbour
                    }
                }
            }


      
            if (cell === 1 && neighborCount > 3) {
                createNextGeneration[col][row] = 0 
            }else if (cell === 1 && neighborCount < 2) {
                createNextGeneration[col][row] = 0
            } else if (cell === 0 && neighborCount === 3) {
                createNextGeneration[col][row] = 1
            }
        }
    }
    return createNextGeneration
}

function show(grid) {
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid.length; row++) {
            const cell = grid[col][row]

            ctx.beginPath()
            ctx.rect(col * numberOfCells, row * numberOfCells, numberOfCells, numberOfCells)
            ctx.fillStyle = cell ? 'purple' : 'black'
            ctx.fill()
            ctx.stroke()
        }
    }
}

function showNextGeneration() {
        grid = createNextGeneration(grid)
        show(grid)
        requestAnimationFrame(showNextGeneration)
}

showNextGeneration()