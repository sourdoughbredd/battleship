import {
  createGameboard,
  createPlayer,
  createComputerPlayer,
} from "./GameObjects.js";

describe("Human player interaction with their own board", () => {
  test("Creating a human player correctly assigns board to them", () => {
    const board = createGameboard();
    const human = createPlayer(board);
    expect(human.board).toBe(board);
  });

  test("Human can place a ship on their board", () => {
    const board = createGameboard();
    const human = createPlayer(board);
    human.placeShip("five", 5, 0, 0, "h");
    expect(human.board).toBe(board);
    expect(human.board.hasShip(0, 1)).toBe(true);
    expect(human.board.hasShip(0, 1)).toBe(board.hasShip(0, 1));
  });
});

describe("Computer player interactions with their own board", () => {
  test("Creating a computer player correctly assigns board to them", () => {
    const board = createGameboard();
    const computer = createComputerPlayer(board);
    expect(computer.board).toBe(board);
  });

  test("Computer can randomly place ships on their board", () => {
    // 100 tests of randomly placing 5 ships on their board
    for (let testNum = 0; testNum < 100; testNum++) {
      const board = createGameboard();
      const computer = createComputerPlayer(board);
      let prevCount = 0;
      for (let length = 1; length < 6; length++) {
        computer.placeShip("ship name", length);
        let count = 0;
        for (let r = 0; r < 10; r++) {
          for (let c = 0; c < 10; c++) {
            if (computer.board.hasShip(r, c)) count++;
          }
        }
        expect(count).toBe(prevCount + length);
        prevCount = count;
      }
    }
  });
});

// Human and Computer can attack each other
describe("Human and computer attacking each other", () => {
  test("Computer attacks the entire board in size*size moves...", () => {
    const humanBoard = createGameboard();
    const computerBoard = createGameboard();
    const human = createPlayer(humanBoard);
    const computer = createComputerPlayer(computerBoard);
    const maxMoves = humanBoard.size * humanBoard.size;
    for (let move = 0; move < maxMoves; move++) {
      expect(humanBoard.attackableSpots().length).toBe(maxMoves - move);
      computer.attack(human);
    }
  });

  test("Player eventually sinks the computer's ship", () => {
    // Setup
    const humanBoard = createGameboard();
    const computerBoard = createGameboard();
    const human = createPlayer(humanBoard);
    const computer = createComputerPlayer(computerBoard);
    computer.placeShip("comp", 5);
    human.placeShip("human", 5, 0, 0, "h");
    // Player attacks all squares better result in all ships sunk
    let numHits = 0;
    for (let r = 0; r < humanBoard.size; r++) {
      for (let c = 0; c < humanBoard.size; c++) {
        human.attack(computer, r, c);
        if (computerBoard.hasShip(r, c)) numHits += 1;
        expect(computerBoard.allShipsSunk()).toBe(numHits === 5);
      }
    }
  });

  test("Computer eventually sinks the player's ship", () => {
    // Setup
    const humanBoard = createGameboard();
    const computerBoard = createGameboard();
    const human = createPlayer(humanBoard);
    const computer = createComputerPlayer(computerBoard);
    computer.placeShip("comp", 5);
    human.placeShip("human", 5, 0, 0, "h");
    // Computer eventually sinks players ship
    let moveCount = 0;
    while (!humanBoard.allShipsSunk()) {
      expect(moveCount).toBeLessThan(humanBoard.size * humanBoard.size);
      computer.attack(human);
    }
  });
});
