# Conway's "Game of Life"

---

In 1970, John Conway, a British mathemetician, created this 
zero-player game to simulate how cells act and evolve.

---

In this project I have recreated the game with these three rules. 

    1. Any live cell with two or three live neighbours survives.
    2. Any dead cell with three live neighbours becomes a live cell.
    3. All other live cells die in the next generation. Similarly,
        all other dead cells stay dead.

---

The game is said to be played out on an infinite grid, but for
simulation purposes I have made the edges of the visibile map dead
cells so it's easy to visualize and easy for a computer to run it.