import "./style.css";
import {
  createComputerPlayer,
  createGameboard,
  createPlayer,
} from "./gameObjects.js";
import { createBoardUI } from "./ui.js";

// Display empty boards
const playerBoard = createGameboard();
const computerBoard = createGameboard();
const PlayerBoardUI = createBoardUI(playerBoard);
const ComputerBoardUI = createBoardUI(computerBoard);
const player = createPlayer(playerBoard);
const computer = createComputerPlayer(computerBoard);
const boardsContainer = document.querySelector(".boards-container");
boardsContainer.appendChild(PlayerBoardUI.boardElem);
boardsContainer.appendChild(ComputerBoardUI.boardElem);

// Place ships on boards
const shipLengths = {
  Carrier: 5,
  Battleship: 4,
  Destroyer: 3,
  Submarine: 3,
  "Patrol Boat": 2,
};

function playerPlaceShip(shipName) {
  const playerPlacement = {
    Carrier: { row: 0, col: 0, orientation: "h" },
    Battleship: { row: 1, col: 0, orientation: "h" },
    Destroyer: { row: 2, col: 0, orientation: "h" },
    Submarine: { row: 3, col: 0, orientation: "h" },
    "Patrol Boat": { row: 4, col: 0, orientation: "h" },
  };

  return playerPlacement[shipName];
}

for (let shipName in shipLengths) {
  // Let Player place ships
  const pp = playerPlaceShip(shipName);
  player.placeShip(
    shipName,
    shipLengths[shipName],
    pp.row,
    pp.col,
    pp.orientation
  );
  // Let computer place ships
  computer.placeShip(shipName, shipLengths[shipName]);
}
PlayerBoardUI.refresh();
ComputerBoardUI.refresh();
// Start game loop
// next players turn
// player chooses attack location (with UI)
// process player attack
// UI shows attack as hit or miss

// Game over - display winner
