export { UI };

const UI = (function () {
  // --------------------------
  // HOME PAGE LOADER
  // --------------------------
  function loadHomePage() {
    // ADD HOME PAGE ELEMENTS TO THE DOM
    const body = document.querySelector("body");
    body.innerHTML = `
      <h1>BATTLESHIP</h1>
      <div class="options-container">
        <label for="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
        </select>
        <button type="button" id="start-game">Start Game</button>
      </div>
      <div class="boards-container"></div>
    `;

    // WAIT FOR USER TO PRESS START GAME BUTTON
    async function solicitStartGame() {
      return new Promise((resolve) => {
        function startGamePressed() {
          const difficulty = getDifficultySelection();
          removeStartGameOptions();
          // Return the difficulty chosen
          resolve(difficulty);
        }
        // Listen for Start Game button clicked
        document
          .querySelector("button#start-game")
          .addEventListener("click", startGamePressed);
      });
    }

    // HELPERS
    function removeStartGameOptions() {
      document.querySelector(".options-container").remove();
    }

    function getDifficultySelection() {
      const select = document.getElementById("difficulty");
      return select.options[select.selectedIndex].value;
    }

    return { solicitStartGame };
  }

  // --------------------------
  // BOARD UI FACTORY FUNCTION
  // --------------------------
  function createBoardUI(board) {
    // ADD BOARD UI TO DOM

    // Create container for board and title
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    // Add title
    const titleElem = document.createElement("h2");
    titleElem.innerText = board.name === "player" ? "YOU" : "AI";
    titleElem.classList.add("title");
    boardContainer.appendChild(titleElem);
    // Add board
    const boardElem = document.createElement("div");
    boardElem.classList.add("board");
    boardElem.id = board.name;
    for (let row = 0; row < board.size; row++) {
      for (let col = 0; col < board.size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-square");
        cell.dataset.row = row;
        cell.dataset.col = col;
        boardElem.appendChild(cell);
      }
    }
    boardContainer.appendChild(boardElem);
    document.querySelector(".boards-container").appendChild(boardContainer);

    // REFRESHES THE BOARD UI
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

    // SOLICITS PLAYER TO PLACE A SHIP USING THE UI
    async function solicitPlaceShip(name, length) {
      // Return promise that resolves when ship successfully placed
      return new Promise((resolve) => {
        let orientation = "h"; // will toggle this with keydown listener on "r"

        // Callback for mouseover that adds shading to cells where ship will be
        // placed if target cell is clicked
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
                // Invalid (row,col) -> ignore
                break;
              }
            }
          } else {
            for (let drow = 0; drow < length; drow++) {
              try {
                getCell(row + drow, col).classList.add("ghost-ship");
              } catch {
                // Invalid (row,col) -> ignore
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
        function keyPressed() {
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

    // HELPERS

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

    return { refresh, solicitPlaceShip, solicitAttack };
  }

  // GAME OVER DISPLAY
  async function displayGameOver(winner) {
    // Add game over display to DOM
    document
      .querySelector(".boards-container")
      .appendChild(getGameOverElement(winner));
    // Wait for user to click the restart button
    return new Promise((resolve) => {
      function playAgainPressed() {
        resolve();
      }
      document
        .querySelector("button#play-again")
        .addEventListener("click", playAgainPressed);
    });
  }

  function getGameOverElement(winner) {
    const container = document.createElement("div");
    container.id = "game-over-container";
    const message =
      winner === "player" ? "Game Over! You won!" : "Game Over! You lost!";
    container.innerHTML = `
      <div id="game-over-message">${message}</div>
      <button type="button" id="play-again">Play Again</button>
    `;
    return container;
  }

  return { loadHomePage, createBoardUI, displayGameOver };
})();
