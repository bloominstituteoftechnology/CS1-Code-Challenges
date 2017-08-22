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

const robotPaths = (n) => {
  const newBoard = makeBoard(n);
  let solutions = 0;
  const recursion = (r, c) => {
    newBoard.toggle(r, c);

    if (r === n-1 && c === n - 1) {
      solutions ++;
      newBoard.toggle(r, c);
      return;
    }
    if (r - 1 >= 0 && !newBoard.hasBeenVisited(r - 1, c)) {
      recursion(r - 1, c);
    }
    if (c + 1 < n && !newBoard.hasBeenVisited(r, c + 1)) {
      recursion(r, c+1);
    }
    if (r + 1 < n && !newBoard.hasBeenVisited(r + 1, c)) {
      recursion(r + 1, c);
    }
    if (c - 1 >= 0 && !newBoard.hasBeenVisited(r, c -1)) {
      recursion(r, c -1);
    }
    newBoard.toggle(r, c);
  } 
  recursion(0, 0);

  return solutions;
}

robotPaths(5);