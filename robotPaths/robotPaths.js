/*
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  EC: Make your solution work for a grid of any size.
 *
 */

const makeBoard = (n) => {
  // this function will build a board nXn for your robot to traverse
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.toggle = (i, j) => {
    // this function is given to help you toggle the board's square
    board[i][j] = !board[i][j]
  };
  board.hasBeenVisited = (i, j) => {
    // this function is given to help you check to see if you've been at the square
    return board[i][j]
  };
  return board;
};

// write your code here for t

const countRobotPaths = (size = 5) => {
  const aBoard = makeBoard(size);
  let paths = 0;

  const moveRobot = (x=0, y=0) => {
    if (x === size - 1 && y === size - 1) {
      paths++;
      return;
    }
    if (x < 0 || x === size || y < 0 || y === size || aBoard.hasBeenVisited(x, y)) return;
    aBoard.toggle(x, y);
    moveRobot(x + 1, y);
    moveRobot(x - 1, y);
    moveRobot(x, y + 1);
    moveRobot(x, y - 1);
    aBoard.toggle(x, y);
    return;
  }

  moveRobot();
  return paths;
}

console.log(`Robot paths: size=5 number= ${countRobotPaths()}`);
console.log(`Robot paths: size=6 number= ${countRobotPaths(6)}`);
console.log(`Robot paths: size=4 number= ${countRobotPaths(4)}`);
console.log(`Robot paths: size=3 number= ${countRobotPaths(3)}`);
console.log(`Robot paths: size=2 number= ${countRobotPaths(2)}`);
