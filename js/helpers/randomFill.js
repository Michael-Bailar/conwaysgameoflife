//function to set all cells randomly true/false
const randomFill = () => {
    for(y = 0; y < worldResolution; y++) {
        for(x = 0; x < worldResolution; x++) {
            if (Math.random() < 0.5) cells[x][y].living = true
        }
    }
}