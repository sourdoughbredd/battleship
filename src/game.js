import {
  createShip,
  createGameboard,
  createPlayer,
  createComputerPlayer,
} from "./gameObjects.js";
import { UI } from "./ui.js";
export { createGame };

const createGame = function () {
  let player, computer;
  let playerBoard, computerBoard;
  let playerBoardUI, computerBoardUI;
  let currPlayer;

  const ships = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    "Patrol Boat": 2,
  };

  async function startGame() {
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
  }

  async function playerPlaceShips() {
    // REAL IMPLEMTATION
    for (const [shipName, shipLength] of Object.entries(ships)) {
      // Solicit player to interact with UI
      await solicitPlaceShipAuto(shipName, shipLength);
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
      } else {
        // Unexpected error
        throw e;
      }
    }
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
    for (const [shipName, shipLength] of Object.entries(ships)) {
      computer.placeShip(shipName, shipLength);
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
        await solicitPlayerAttack();
        computerBoardUI.refresh();
      } else {
        // Computer attacks
        computer.attack();
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
      await solicitPlayerAttack();
    }
    return new Promise((resolve) => resolve());
  }

  return {
    startGame,
  };
};
