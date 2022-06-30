const _ = require('lodash');

const directions = [
  { x: -1, y: 0 }, // left
  { x: 1, y: 0 }, // right
  { x: 0, y: -1 }, // up
  { x: 0, y: 1 }, // down
  { x: -1, y: -1 }, // up-left
  { x: 1, y: -1 }, // up-right
  { x: -1, y: 1 }, // down-left
  { x: 1, y: 1 }, // down-right
];

// zero indicates a dead cell
// one indicates a live cell

let grid;

// Block
// grid = [
//   [0, 0, 0, 0],
//   [0, 1, 1, 0],
//   [0, 1, 1, 0],
//   [0, 0, 0, 0],
// ];

// Blinker
// grid = [
//   [0, 1, 0],
//   [0, 1, 0],
//   [0, 1, 0],
// ];

// Glider
grid = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
];

const rows = grid.length;
const columns = grid[0].length;

const advanceSimulation = (grid) => {
  const newGrid = _.cloneDeep(grid);
  console.log('Grid before:', grid);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Counting live neighbours
      let neighbours = 0;

      directions.forEach(({ x, y }) => {
        const newI = x + i;
        const newJ = y + j;
        if (newI >= 0 && newI < rows && newJ >= 0 && newJ < columns) {
          neighbours += grid[newI][newJ];
        }
      });

      // Cell dies if < 2 or > 3 live neighbours
      // Dead cell with 3 neighbours becomes live
      if (neighbours < 2 || neighbours > 3) {
        newGrid[i][j] = 0;
      } else if (grid[i][j] === 0 && neighbours === 3) {
        newGrid[i][j] = 1;
      }
      console.log(`(${i}, ${j}): ${neighbours}`);
    }
  }

  console.log('Grid after:', grid);
  return (grid = _.cloneDeep(newGrid));
};

advanceSimulation();
