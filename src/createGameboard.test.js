import { createGameboard } from ".";

const BOARD_SIZE = 10;

function getBoardWithFill(fillValue) {
  return [...Array(BOARD_SIZE)].map((e) => Array(BOARD_SIZE).fill(fillValue));
}

// Ship placement
describe("regular (non-error) ship placement", () => {
  test("horizontally place a single ship", () => {
    const board = createGameboard();
    const name = "five";
    const length = 5;
    board.placeShip(name, length, 0, 0, "h");
    // Create our local ship tracker to check against
    const shipHere = getBoardWithFill(false);
    for (let c = 0; c < length; c++) {
      shipHere[0][c] = true;
    }
    // Check ship placement
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        expect(board.hasShip(r, c)).toBe(shipHere[r][c]);
      }
    }
  });

  test("vertically place a single ship", () => {
    const board = createGameboard();
    const name = "five";
    const length = 5;
    board.placeShip(name, length, 0, 0, "v");
    // Create our local ship tracker to check against
    const shipHere = getBoardWithFill(false);
    for (let r = 0; r < length; r++) {
      shipHere[r][0] = true;
    }
    // Check ship placement
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        expect(board.hasShip(r, c)).toBe(shipHere[r][c]);
      }
    }
  });

  test("place multiple ships", () => {
    const board = createGameboard();
    const name = "five";
    const length = 5;
    board.placeShip(name, length, 0, 0, "h");
    board.placeShip(name, length, BOARD_SIZE - length, BOARD_SIZE - 1, "v");
    // Create our local ship tracker to check against
    const shipHere = getBoardWithFill(false);
    for (let c = 0; c < length; c++) {
      shipHere[0][c] = true;
    }
    for (let r = BOARD_SIZE - length; r < BOARD_SIZE; r++) {
      shipHere[r][BOARD_SIZE - 1] = true;
    }
    // Check ship placement
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        expect(board.hasShip(r, c)).toBe(shipHere[r][c]);
      }
    }
  });
});

describe("ship placement errors", () => {
  const board = createGameboard();
  const name = "generic ship name";

  test("placing ship off board throws error", () => {
    // Invalid placement bounds
    expect(() => board.placeShip(name, 2, -1, 0, "h")).toThrow(
      "Invalid (row, col) pair (-1, 0) for board dimensions!"
    );
    expect(() => board.placeShip(name, 2, 0, -1, "h")).toThrow(
      "Invalid (row, col) pair (0, -1) for board dimensions!"
    );
    expect(() => board.placeShip(name, 2, BOARD_SIZE, 0, "h")).toThrow(
      "Invalid (row, col) pair (10, 0) for board dimensions!"
    );
    expect(() => board.placeShip(name, 2, 0, BOARD_SIZE, "h")).toThrow(
      "Invalid (row, col) pair (0, 10) for board dimensions!"
    );
    // Ship length goes out of bounds
    expect(() =>
      board.placeShip(name, 2, BOARD_SIZE - 1, BOARD_SIZE - 1, "h")
    ).toThrow(
      "Horizontally placing ship of length 2 at row 9, col 9 would violate board bounds!"
    );
    expect(() =>
      board.placeShip(name, 2, BOARD_SIZE - 1, BOARD_SIZE - 1, "v")
    ).toThrow(
      "Vertically placing ship of length 2 at row 9, col 9 would violate board bounds!"
    );
  });

  // Intersecting another ship
  test("intersecting another ship throws error", () => {
    const board = createGameboard();
    const name = "five";
    const length = 5;
    board.placeShip(name, length, 1, 0, "h");
    expect(() => board.placeShip(name, length, 0, 1, "v")).toThrow(
      "Ship placement intersects a ship that is already on the board!"
    );
  });
});

// Board attacking, tracking hits and misses
describe("Attacking board and tracking hits and misses", () => {
  test("Attacking same spot twice throws error", () => {
    const board = createGameboard();
    board.receiveAttack(0, 0);
    expect(() => board.receiveAttack(0, 0)).toThrow(
      "Square at (0, 0) has already been attacked!"
    );
  });

  test("Missed attacks correctly convert attack status from null to false", () => {
    const board = createGameboard();
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        expect(board.attackStatus(r, c)).toBe(null);
        board.receiveAttack(r, c);
        expect(board.attackStatus(r, c)).toBe(false);
      }
    }
  });
});

// All ships sunk?

//
