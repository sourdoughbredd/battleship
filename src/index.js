import "./style.css";
import { createGame, createReplay } from "./game.js";
import { UI } from "./ui.js";

// INITIALIZE UI
const home = UI.createHomePage();
await home.solicitStartGame();

// NEW GAME
const game = createGame();
await game.startGame();

// RESTIM
// const replay = createReplay();
// await replay.replayGame(125);
