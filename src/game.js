import {
  createShip,
  createGameboard,
  createPlayer,
  createComputerPlayer,
} from "./gameObjects.js";
import { pubsub } from "./pubSub.js";
export { createGame };

const createGame = function () {
  let player, computer;
  let playerBoard, computerBoard;
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
    // Create players
    player = createPlayer(playerBoard, computerBoard);
    computer = createComputerPlayer(computerBoard, playerBoard);
    // Let players place their ships
    playerPlaceShips();
    computerPlaceShips();
    // Start game loop
    currPlayer = player;
    const dummy = await gameLoop();
    console.log(dummy);
  }

  function playerPlaceShips() {
    const playerPlacement = {
      Carrier: { row: 0, col: 0, orientation: "h" },
      Battleship: { row: 1, col: 0, orientation: "h" },
      Destroyer: { row: 2, col: 0, orientation: "h" },
      Submarine: { row: 3, col: 0, orientation: "h" },
      "Patrol Boat": { row: 4, col: 0, orientation: "h" },
    };

    for (const [shipName, placement] of Object.entries(playerPlacement)) {
      const success = player.placeShip(
        shipName,
        ships[shipName],
        placement.row,
        placement.col,
        placement.orientation
      );
    }
  }

  function computerPlaceShips() {
    for (const [shipName, shipLength] of Object.entries(ships)) {
      computer.placeShip(shipName, shipLength);
    }
  }

  function switchPlayer() {
    currPlayer = currPlayer == player ? computer : player;
  }

  function gameOver() {
    return playerBoard.allShipsSunk() || computerBoard.allShipsSunk();
  }

  async function gameLoop() {
    // setTimeout(() => {
    //   gameOver = true;
    // }, 5 * 1000);
    while (!gameOver()) {
      // Wait for player to take turn
      await currPlayer.takeTurn();
      // Next player's turn
      switchPlayer();
    }
    return new Promise((resolve, reject) => resolve("game over"));
  }

  return {
    startGame,
  };
};
