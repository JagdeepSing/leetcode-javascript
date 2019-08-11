/**
 *  Returns number of islands in a 2D array of 1's (land) and 0's (water).
 *
 * @export
 * @param {Array[Array]]} grid
 * @returns {Number} count of islands in 2D array
 */
export default function numOfIslands(grid) {
  let islands = 0;
  let exploredLand = new Set();

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === 1 && !exploredLand.has(`${x},${y}`)) {
        islands++;
        discoverIsland(grid, exploredLand, x, y);
      }
    }
  }
  return islands;
}

/**
 *  Adds all connected 1's in grid to explored land set.
 *
 * @param {Array[[Array]]} grid
 * @param {Set} exploredLand
 * @param {Number} x
 * @param {Number} y
 * @returns {Set} exploredLand 
 */
function discoverIsland(grid, exploredLand, x, y) {
  if (!grid || !exploredLand || x < 0 || x >= grid.length || y < 0 || y >= grid[x].length) {
    return exploredLand;
  }

  if (grid[x][y] === 1 && !exploredLand.has(`${x},${y}`)) {
    exploredLand.add(`${x},${y}`);
    discoverIsland(grid, exploredLand, x - 1, y);
    discoverIsland(grid, exploredLand, x + 1, y);
    discoverIsland(grid, exploredLand, x, y - 1);
    discoverIsland(grid, exploredLand, x, y + 1);
  }

  return exploredLand;
}