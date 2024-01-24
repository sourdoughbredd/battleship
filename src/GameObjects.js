export { createShip, createGameboard };

function createShip(name, length) {
  // Error checking
  if (length < 1) {
    throw new Error(
      `Cannot create a ship with length (${length}) less than 1!`
    );
  }

  // Private variables
  const _length = length;
  const _name = name;
  let _hitCount = 0;

  // Increments hit count on ship if it is not sunk. Errors if ship is sunk.
  const hit = function () {
    if (isSunk()) {
      throw new Error("Cannot hit a ship that is already sunk!");
    }
    _hitCount += 1;
  };

  // Returns true if ship is sunk, false otherwise
  const isSunk = function () {
    return _hitCount == _length;
  };

  // Returns the name of the ship
  const getName = function () {
    return _name;
  };

  return {
    hit,
    isSunk,
    getName,
  };
}

function createGameboard(boardName) {
  const BOARD_SIZE = 10;

  function getBoardWithFill(fillValue) {
    return [...Array(BOARD_SIZE)].map((e) => Array(BOARD_SIZE).fill(fillValue));
  }

  const _ships = getBoardWithFill(null);
  const _attacks = getBoardWithFill(null);
  let _numShipsLeft = 0;

  function validateRowCol(row, col) {
    if (row < 0 || col < 0 || row >= BOARD_SIZE || col >= BOARD_SIZE) {
      throw new Error(
        `Invalid (row, col) pair (${row}, ${col}) for board dimensions!`
      );
    }
  }

  function validateShipPlacement(length, row, col, orientation) {
    // Check for violations of board boundaries
    try {
      validateRowCol(row, col);
    } catch (e) {
      throw new InvalidShipPlacementError(e.message);
    }
    if (orientation !== "h" && orientation !== "v") {
      throw new InvalidShipPlacementError(
        `Orientation must be 'h' or 'v'! Value provided: ${orientation}`
      );
    }
    if (orientation === "h" && col + length > BOARD_SIZE) {
      throw new InvalidShipPlacementError(
        `Horizontally placing ship of length ${length} at row ${row}, col ${col} would violate board bounds!`
      );
    }
    if (orientation === "v" && row + length > BOARD_SIZE) {
      throw new InvalidShipPlacementError(
        `Vertically placing ship of length ${length} at row ${row}, col ${col} would violate board bounds!`
      );
    }
    // Check if intersects existing ships
    const shipLengthRange = [...Array(length).keys()];
    for (let delta of shipLengthRange) {
      const intersecting =
        orientation === "h"
          ? hasShip(row, col + delta)
          : hasShip(row + delta, col);
      if (intersecting) {
        throw new InvalidShipPlacementError(
          `Ship placement intersects a ship that is already on the board!`
        );
      }
    }
  }

  class InvalidShipPlacementError extends Error {
    constructor(message) {
      super(message);
      this.name = "InvalidShipPlacementError";
    }
  }

  const placeShip = function (name, length, row, col, orientation) {
    validateShipPlacement(length, row, col, orientation);

    const ship = createShip(name, length);
    const locations = [];
    for (let delta = 0; delta < length; delta++) {
      if (orientation == "h") {
        _ships[row][col + delta] = ship;
        locations.push({ row, col: col + delta });
      } else {
        _ships[row + delta][col] = ship;
        locations.push({ row: row + delta, col });
      }
    }
    _numShipsLeft += 1;
  };

  const hasShip = function (row, col) {
    validateRowCol(row, col);
    return _ships[row][col] ? true : false;
  };

  const allShipsSunk = function () {
    return _numShipsLeft === 0;
  };

  const receiveAttack = function (row, col) {
    validateRowCol(row, col);
    if (!attackAllowed(row, col)) {
      throw new Error(`Square at (${row}, ${col}) has already been attacked!`);
    }
    const hitShip = hasShip(row, col);
    _attacks[row][col] = hitShip ? true : false;
    if (hitShip) {
      _ships[row][col].hit();
      _numShipsLeft -= _ships[row][col].isSunk();
    }
    return hitShip;
  };

  const attackStatus = function (row, col) {
    return _attacks[row][col];
  };

  const attackAllowed = function (row, col) {
    try {
      validateRowCol(row, col);
    } catch {
      return false;
    }
    return attackStatus(row, col) === null;
  };

  const attackableSpots = function () {
    const attackable = [];
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (attackAllowed(r, c)) {
          attackable.push([r, c]);
        }
      }
    }
    return attackable;
  };

  return {
    name: boardName,
    size: BOARD_SIZE,
    placeShip,
    hasShip,
    allShipsSunk,
    receiveAttack,
    attackStatus,
    attackAllowed,
    attackableSpots,
    InvalidShipPlacementError,
  };
}
