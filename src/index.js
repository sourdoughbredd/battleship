import "./style.css";
// import {
//   createComputerPlayer,
//   createGameboard,
//   createPlayer,
// } from "./gameObjects.js";
// import { createBoardUI } from "./ui.js";
import { pubsub } from "./pubSub.js";
import { createGame } from "./game.js";
import { UI } from "./ui.js";

// pubsub.subscribe("boardClicked", (event) => console.log(event.target));

// // Create all game objects
// const playerBoard = createGameboard();
// const computerBoard = createGameboard();
// const PlayerBoardUI = createBoardUI(playerBoard);
// const ComputerBoardUI = createBoardUI(computerBoard);
// const player = createPlayer(playerBoard);
// const computer = createComputerPlayer(computerBoard);
// const boardsContainer = document.querySelector(".boards-container");
// boardsContainer.appendChild(PlayerBoardUI.boardElem);
// boardsContainer.appendChild(ComputerBoardUI.boardElem);

// // Place ships on boards
// const shipLengths = {
//   Carrier: 5,
//   Battleship: 4,
//   Destroyer: 3,
//   Submarine: 3,
//   "Patrol Boat": 2,
// };

// function playerAutoPlace(shipName) {
//   const playerPlacement = {
//     Carrier: { row: 0, col: 0, orientation: "h" },
//     Battleship: { row: 1, col: 0, orientation: "h" },
//     Destroyer: { row: 2, col: 0, orientation: "h" },
//     Submarine: { row: 3, col: 0, orientation: "h" },
//     "Patrol Boat": { row: 4, col: 0, orientation: "h" },
//   };

//   return playerPlacement[shipName];
// }

// // function solicitPlayerPlaceShip(shipName, shipLength) {
// //   const boardUi = PlayerBoardUI.boardElem;
// //   boardUi.addEventListener("click", (e) => console.log(e.target));
// // }

// for (let ship in shipLengths) {
//   // Let Player place ships
//   // const pp = solicitPlayerPlaceShip(ship, shipLengths[ship]);
//   const pp = playerAutoPlace(ship);
//   player.placeShip(ship, shipLengths[ship], pp.row, pp.col, pp.orientation);
//   // Let computer place ships
//   computer.placeShip(ship, shipLengths[ship]);
// }
// PlayerBoardUI.refresh();
// ComputerBoardUI.refresh();
// // Start game loop
// // next players turn
// // player chooses attack location (with UI)
// // process player attack
// // UI shows attack as hit or miss

// // Game over - display winner

// TOTAL RETRY
const game = createGame();
game.startGame();
