import "./style.css";
import { createGame, createReplay } from "./game.js";

// NEW GAME
// const game = createGame();
// await game.startGame();

// RESTIM
const replay = createReplay();
await replay.replayGame(125);
