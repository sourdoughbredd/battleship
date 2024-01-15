export { createBoardUI };

function lin2sub(linearIndex) {
  const row = Math.floor(linearIndex / 10);
  const col = linearIndex % 10;
  return { row, col };
}

function createBoardUI(board) {
  // Create the DOM element
  const boardElem = document.createElement("div");
  const cellsArray = [...Array(board.size)].map((e) => Array(board.size));
  boardElem.classList.add("board");
  for (let i = 0; i < board.size * board.size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-square");
    const row = lin2sub(i).row;
    const col = lin2sub(i).col;
    cell.dataset.row = row;
    cell.dataset.col = col;
    cellsArray[row][col] = cell;
    boardElem.appendChild(cell);
  }

  // Refresh the DOM element
  function refresh() {
    for (let r = 0; r < board.size; r++) {
      for (let c = 0; c < board.size; c++) {
        if (board.hasShip(r, c)) cellsArray[r][c].classList.add("has-ship");
      }
    }
  }

  return {
    boardElem,
    // placeShip,
    refresh,
  };
}
