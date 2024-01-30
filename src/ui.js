export { UI };

const UI = (function () {
  // --------------------------
  // HOME PAGE LOADER
  // --------------------------

  function createHomePage() {
    // Add home page elements to DOM
    const body = document.querySelector("body");
    body.innerHTML = `
      <h1>BATTLESHIP</h1>
      <button type="button" id="start-game">Start Game</button>
      <div class="boards-container"></div>
    `;

    function removeStartGameButton() {
      document.querySelector("button#start-game").remove();
    }

    // Wait for user to press the "Start Game" button
    async function solicitStartGame() {
      return new Promise((resolve) => {
        function startGamePressed() {
          removeStartGameButton();
          resolve();
        }
        // Listen for Start Game button clicked
        document
          .querySelector("button#start-game")
          .addEventListener("click", startGamePressed);
      });
    }

    return { solicitStartGame };
  }

  // --------------------------
  // BOARD UI FACTORY FUNCTION
  // --------------------------
  function createBoardUI(board) {
    // Create the board UI DOM element and append to DOM
    const boardElem = document.createElement("div");
    boardElem.classList.add("board");
    boardElem.id = board.name;
    for (let row = 0; row < board.size; row++) {
      for (let col = 0; col < board.size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-square");
        cell.dataset.row = row;
        cell.dataset.col = col;
        // cellsArray[row][col] = cell;
        boardElem.appendChild(cell);
      }
    }
    document.querySelector(".boards-container").appendChild(boardElem);

    // Get cell DOM element by (row, col) index
    function getCell(row, col) {
      return boardElem.querySelector(
        `.grid-square[data-row="${row}"][data-col="${col}"]`
      );
    }

    // Add ship to cell
    function addShip(row, col) {
      getCell(row, col).classList.add("has-ship");
    }

    // Add hit to cell
    function addHit(row, col) {
      getCell(row, col).classList.add("hit");
    }

    // Add miss to cell
    function addMiss(row, col) {
      getCell(row, col).classList.add("miss");
    }

    // Refreshes the board UI
    function refresh() {
      for (let row = 0; row < board.size; row++) {
        for (let col = 0; col < board.size; col++) {
          if (board.hasShip(row, col)) {
            addShip(row, col);
          }
          switch (board.attackStatus(row, col)) {
            case "hit":
              addHit(row, col);
              break;
            case "miss":
              addMiss(row, col);
              break;
            case "none":
              // Not attacked
              break;
            default:
              throw new Error(
                "Board attackStatus() method returned an unexpected value!"
              );
          }
        }
      }
    }

    // Solicits the player to place a ship using the UI
    async function solicitPlaceShip(name, length) {
      return new Promise((resolve) => {
        let orientation = "h"; // will toggle this with keydown listener

        // Callback for mouseover that adds shading to cells where ship will be placed if target cell is clicked
        function addGhostShip(event) {
          if (!event.target || !event.target.classList.contains("grid-square"))
            return;
          const cell = event.target;
          const row = parseInt(cell.dataset.row);
          const col = parseInt(cell.dataset.col);
          if (orientation === "h") {
            for (let dcol = 0; dcol < length; dcol++) {
              try {
                getCell(row, col + dcol).classList.add("ghost-ship");
              } catch {
                break;
              }
            }
          } else {
            for (let drow = 0; drow < length; drow++) {
              try {
                getCell(row + drow, col).classList.add("ghost-ship");
              } catch {
                break;
              }
            }
          }
        }

        // Callback for mouseout that clears all ghost ships from the board
        function clearAllGhostShips() {
          const ghostShips = boardElem.querySelectorAll(
            ".grid-square.ghost-ship"
          );
          ghostShips.forEach((cell) => cell.classList.remove("ghost-ship"));
        }

        // Callback for keydown that rotates the ghost ship if "r" is pressed
        function keyPressed(event) {
          if (event.key.toLowerCase() !== "r") return;
          orientation = orientation == "h" ? "v" : "h";
          clearAllGhostShips();
          // Call the hover callback with a fudged event target to generate the rotated ghost ship
          const target = document.querySelector(".grid-square:hover");
          addGhostShip({ target });
        }

        // Callback when board is clicked that returns the placement chosen
        function boardClicked(event) {
          // Destroy all event listeners and custom hover effect
          removeAllEventListeners();
          clearAllGhostShips();
          // RESOLVE
          resolve({
            row: parseInt(event.target.dataset.row),
            col: parseInt(event.target.dataset.col),
            orientation,
          });
        }

        // Adds all event listeners for ship placement interactivity
        function addAllEventListeners() {
          boardElem.addEventListener("mouseover", addGhostShip);
          boardElem.addEventListener("mouseout", clearAllGhostShips);
          boardElem.addEventListener("click", boardClicked);
          addEventListener("keydown", keyPressed);
        }

        // Removes all event listeners for ship placement interactivity
        function removeAllEventListeners() {
          boardElem.removeEventListener("mouseover", addGhostShip);
          boardElem.removeEventListener("mouseout", clearAllGhostShips);
          boardElem.removeEventListener("click", boardClicked);
          removeEventListener("keydown", keyPressed);
        }

        //  Event listeners
        addAllEventListeners();
      });
    }

    // Solicit an attack using the board UI
    async function solicitAttack() {
      return new Promise((resolve) => {
        function boardClicked(event) {
          boardElem.removeEventListener("click", boardClicked);
          resolve({
            row: parseInt(event.target.dataset.row),
            col: parseInt(event.target.dataset.col),
          });
        }

        boardElem.addEventListener("click", boardClicked);
      });
    }

    return { refresh, solicitPlaceShip, solicitAttack };
  }

  return { createHomePage, createBoardUI };
})();
