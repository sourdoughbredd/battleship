import "./style.css";
import { createGame, createReplay } from "./game.js";
import { UI } from "./ui.js";

while (true) {
  // Initialize UI
  const home = UI.loadHomePage();
  const difficulty = await home.solicitStartGame();
  // Create new game and start
  const game = createGame(difficulty);
  await game.startGame();
}

// REPLAY SAVED GAME
// const replay = createReplay();
// await replay.replayGame(125);
