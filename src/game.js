import { createGameboard } from "./gameObjects.js";
import { createPlayer, createComputerPlayer } from "./player.js";
import { UI } from "./ui.js";
export { createGame, createReplay };

const createGame = function () {
  let player, computer;
  let playerBoard, computerBoard;
  let playerBoardUI, computerBoardUI;
  const gameLog = {
    playerShips: [],
    computerShips: [],
    playerAttacks: [],
    computerAttacks: [],
  };
  let currPlayer;

  const ships = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    "Patrol Boat": 2,
  };

  async function startGame() {
    try {
      // Create boards
      playerBoard = createGameboard("player");
      computerBoard = createGameboard("computer");

      // Create board UIs
      playerBoardUI = UI.createBoardUI(playerBoard);
      computerBoardUI = UI.createBoardUI(computerBoard);

      // Create players
      player = createPlayer(playerBoard, computerBoard);
      computer = createComputerPlayer(computerBoard, playerBoard);

      // Let players place their ships
      await playerPlaceShips();
      playerBoardUI.refresh();
      computerPlaceShips();
      computerBoardUI.refresh();

      // Start game loop
      await gameLoop();
      saveGameLog();
    } catch {
      // Save game log so game can be restimulated
      saveGameLog();
    }
  }

  async function playerPlaceShips() {
    // REAL IMPLEMTATION
    for (const [shipName, shipLength] of Object.entries(ships)) {
      // Solicit player to interact with UI
      await solicitPlaceShip(shipName, shipLength);
      // Refresh UI
      playerBoardUI.refresh();
    }
  }

  async function solicitPlaceShip(name, length) {
    console.log(`waiting to place ${name}`);
    const placement = await playerBoardUI.solicitPlaceShip(name, length);
    // Get UI input and place on board
    try {
      playerBoard.placeShip(
        name,
        length,
        placement.row,
        placement.col,
        placement.orientation
      );
    } catch (e) {
      if (e instanceof playerBoard.InvalidShipPlacementError) {
        // Try again
        await solicitPlaceShip(name, length);
        return;
      } else {
        // Unexpected error
        throw e;
      }
    }
    gameLog.playerShips.push({ name, length, ...placement });
  }

  // (FOR TESTING) Automatically places players ships in top-left corner
  async function solicitPlaceShipAuto(name, length) {
    const playerPlacement = {
      Carrier: { row: 0, col: 0, orientation: "h" },
      Battleship: { row: 1, col: 0, orientation: "h" },
      Destroyer: { row: 2, col: 0, orientation: "h" },
      Submarine: { row: 3, col: 0, orientation: "h" },
      "Patrol Boat": { row: 4, col: 0, orientation: "h" },
    };
    const placement = playerPlacement[name];
    player.placeShip(
      name,
      length,
      placement.row,
      placement.col,
      placement.orientation
    );
    return new Promise((resolve) => resolve());
  }

  function computerPlaceShips() {
    for (const [name, length] of Object.entries(ships)) {
      const placement = computer.placeShip(name, length);
      gameLog.computerShips.push({ name, length, ...placement });
    }
  }

  function gameOver() {
    return playerBoard.allShipsSunk() || computerBoard.allShipsSunk();
  }

  function processGameOver(winningPlayer) {
    alert(
      `Game Over! Winner is ${
        winningPlayer === player ? "Player" : "Computer"
      }!`
    );
  }

  async function gameLoop() {
    let currPlayer = player;

    function switchPlayer() {
      currPlayer = currPlayer == player ? computer : player;
    }

    while (!gameOver()) {
      // Wait for player to take turn
      if (currPlayer === player) {
        // Solicit attack spot from UI
        const loc = await solicitPlayerAttack();
        gameLog.playerAttacks.push(loc);
        computerBoardUI.refresh();
      } else {
        // Computer attacks
        const loc = computer.attack();
        gameLog.computerAttacks.push(loc);
        playerBoardUI.refresh();
      }
      // Next player's turn
      switchPlayer();
    }

    // Game is over. Resolve the promise.
    return new Promise((resolve, reject) => {
      switchPlayer(); // switch so currPlayer is winner
      processGameOver(currPlayer);
      resolve();
    });
  }

  async function solicitPlayerAttack() {
    const loc = await computerBoardUI.solicitAttack();
    try {
      player.attack(loc.row, loc.col);
    } catch {
      return await solicitPlayerAttack();
    }
    return new Promise((resolve) => resolve(loc));
  }

  function saveGameLog() {
    localStorage.setItem("gameLog", JSON.stringify(gameLog));
  }

  return {
    startGame,
  };
};

function createReplay() {
  async function replayGame(delay) {
    // INITIALIZE GAME
    const gameLog = loadGameLog();

    // Load the gameLog
    function loadGameLog() {
      return JSON.parse(localStorage.getItem("gameLog"));
    }

    // Sleep
    async function sleep() {
      return new Promise((resolve) => setTimeout(resolve, delay));
    }

    async function playerPlaceShips() {
      for (let ship of gameLog.playerShips) {
        playerBoard.placeShip(
          ship.name,
          ship.length,
          ship.row,
          ship.col,
          ship.orientation
        );
        playerBoardUI.refresh();
        await sleep();
      }
    }

    async function computerPlaceShips() {
      for (let ship of gameLog.computerShips) {
        computerBoard.placeShip(
          ship.name,
          ship.length,
          ship.row,
          ship.col,
          ship.orientation
        );
        computerBoardUI.refresh();
        await sleep();
      }
    }

    // Create boards
    const playerBoard = createGameboard("player");
    const computerBoard = createGameboard("computer");

    // Create board UIs
    const playerBoardUI = UI.createBoardUI(playerBoard);
    const computerBoardUI = UI.createBoardUI(computerBoard);

    // Let players place their ships
    await playerPlaceShips();
    playerBoardUI.refresh();
    await computerPlaceShips();
    computerBoardUI.refresh();

    // GAME LOOP

    async function playerAttack() {
      const attack = gameLog.playerAttacks.shift();
      computerBoard.receiveAttack(attack.row, attack.col);
      await sleep();
    }

    async function computerAttack() {
      const attack = gameLog.computerAttacks.shift();
      playerBoard.receiveAttack(attack.row, attack.col);
      await sleep();
    }

    function done() {
      return (
        gameLog.playerAttacks.length === 0 &&
        gameLog.computerAttacks.length === 0
      );
    }

    // Start game loop
    while (!done()) {
      if (gameLog.playerAttacks.length > 0) {
        await playerAttack();
        playerBoardUI.refresh();
      }
      if (gameLog.computerAttacks.length > 0) {
        await computerAttack();
        computerBoardUI.refresh();
      }
    }

    // Return the promise since we are done
    return new Promise((resolve) => {
      playerBoardUI.refresh();
      computerBoardUI.refresh();
      resolve();
    });
  }

  return { replayGame };
}
