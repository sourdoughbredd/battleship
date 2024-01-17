import { pubsub } from "./pubSub.js";
export { UI };

const UI = (function () {
  function lin2sub(linearIndex) {
    const row = Math.floor(linearIndex / 10);
    const col = linearIndex % 10;
    return { row, col };
  }

  function addBoardToDOM(board) {
    // Create the board UI DOM element and append to DOM
    const boardElem = document.createElement("div");
    // const cellsArray = [...Array(board.size)].map((e) => Array(board.size));
    boardElem.classList.add("board");
    boardElem.id = board.name;
    for (let i = 0; i < board.size * board.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-square");
      const row = lin2sub(i).row;
      const col = lin2sub(i).col;
      cell.dataset.row = row;
      cell.dataset.col = col;
      // cellsArray[row][col] = cell;
      boardElem.appendChild(cell);
    }
    document.querySelector(".boards-container").appendChild(boardElem);

    // Add click listeners to the board
    boardElem.addEventListener("click", (event) => {
      pubsub.publish("boardClicked", {
        name: board.name,
        row: event.target.dataset.row,
        col: event.target.dataset.col,
      });
      // console.log(board.name + " board clicked!");
    });

    // Add subscriber for ship addition
    function addShip(name, locations) {
      for (let i = 0; i < locations.length; i++) {
        const row = locations[i].row;
        const col = locations[i].col;
        const cell = boardElem.querySelector(
          `.grid-square[data-row="${row}"][data-col="${col}"]`
        );
        cell.classList.add("has-ship");
      }
    }

    pubsub.subscribe("shipAdded", (data) => {
      const boardName = data.boardName;
      if (boardName === board.name) {
        addShip(data.shipName, data.locations);
      }
    });

    // Add subscriber for board attacks
    pubsub.subscribe("boardAttacked", (data) => {
      if (data.boardName === board.name) {
        // console.log(
        //   `attack received! (${data.row}, ${data.col}) is ${data.status} on ${data.boardName} board!`
        // );
        const cell = boardElem.querySelector(
          `.grid-square[data-row="${data.row}"][data-col="${data.col}"]`
        );
        cell.classList.add(data.status);
      }
    });
  }

  // Listen for board creations and add them to the DOM
  pubsub.subscribe("boardCreated", (board) => {
    addBoardToDOM(board);
  });
})();
