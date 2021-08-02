# maze-game

This is a browser based Maze-Game which uses basic HTML, CSS and Javascript and used DOM Manipulation for displaying the dynamic part.
This contains the following features:
1. Maze Generation
2. Maze Display
3. Input Reading and Game Display
4. Online Hosting
5. User-Selecting Difficulty Levels (Bonus)
6. Timer(Bonus)

## Maze Generation
It uses a  **RECURSIVE BACKTRACKING ALGORITHM** which uses depth-first search to visit the unvisited cells and carve out walls to generate a different maze each time. The random sort for choosing a different direction to move in out of the four is being done by Schwartzian's Transform which adds more generality and randomness in maze generation.

#### Algorithm:
1. Choose a starting point in the field.
2. Randomly choose a wall at that point and carve a passage through to the adjacent cell, but only if the adjacent cell has not been visited yet. This becomes the new current cell.
3. If all adjacent cells have been visited, back up to the last cell that has uncarved walls and repeat.
4. The algorithm ends when the process has backed all the way up to the starting point.

Resources: 
1. http://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking
2. https://www.w3schools.com/js/js_htmldom.asp
3. https://medium.com/@hugofqueiros/sorting-schwartzian-transform-88565c379385

### Game Link:
https://pranavich18.github.io/maze-game/
