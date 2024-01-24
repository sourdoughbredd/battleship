import { pubsub } from "./pubSub.js";
export { createShip, createGameboard, createPlayer, createComputerPlayer };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomOrientation() {
  return getRandomInt(0, 2) === 0 ? "h" : "v";
}

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

function createPlayer(board, opponentBoard) {
  function attack(row, col) {
    opponentBoard.receiveAttack(row, col);
  }

  async function placeShip(name, length, row, col, orientation) {
    board.placeShip(name, length, row, col, orientation);
    return new Promise((resolve) => resolve());
  }

  return {
    board,
    placeShip,
    attack,
  };
}

function createComputerPlayer(board, opponentBoard) {
  // Start with regular player as template, then override methods
  const computer = createPlayer(board, opponentBoard);

  // Override methods

  // Repeatedly tries to place the ship at random until a success
  computer.placeShip = function (name, length) {
    try {
      computer.board.placeShip(
        name,
        length,
        getRandomInt(0, board.size),
        getRandomInt(0, board.size),
        getRandomOrientation()
      );
    } catch (e) {
      if (!(e instanceof board.InvalidShipPlacementError)) throw e;
      computer.placeShip(name, length);
    }
  };

  // Attack a random spot from the set of all allowable spots
  computer.attack = function () {
    computerAttackLogicMedium();
  };

  function computerAttackLogicEasy() {
    const [row, col] = getRandomAttackableSpot(opponentBoard);
    opponentBoard.receiveAttack(row, col);
  }

  // Variables that hard-level AI needs to maintain throughout game
  let mode = "LOCATING"; // LOCATING, ORIENTING, DESTROYING

  const attackHistory = {};
  resetAttackHistory();

  function resetAttackHistory() {
    attackHistory.lastAttack = { row: null, col: null };
    // attackHistory.lastAttackHit = false;
    attackHistory.initialHit = { row: null, col: null };
    attackHistory.orientation = null; // "h" or "v"
    attackHistory.direction = null; // +/- 1
    attackHistory.numDirectionsFinished = 0;
  }

  function computerAttackLogicMedium() {
    let row, col;
    switch (mode) {
      case "LOCATING": {
        locatingLogic();
        break;
      }
      case "ORIENTING": {
        // Last attack was a hit. Now trying to determine orientation of ship
        orientingLogic();
        break;
      }
      case "DESTROYING": {
        // Orientation determined. Destroy ship in one direction, then the other!
        destroyingLogic();
        break;
      }
      default:
        break;
    }
    console.log(attackHistory);
  }

  // LOCATING logic
  function locatingLogic() {
    // Choose a random spot
    const [row, col] = getRandomAttackableSpot(opponentBoard);
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;
    // Change states if attack was a hit
    if (hit) {
      attackHistory.initialHit = { row, col };
      console.log("initial hit is");
      console.log(attackHistory.initialHit);
      mode = "ORIENTING";
    }
  }

  function orientingLogic() {
    // Attack a random neighbor of initial hit location
    const [row, col] = getRandomAttackableNeighbor(
      opponentBoard,
      attackHistory.initialHit.row,
      attackHistory.initialHit.col
    );
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;
    // Change states if attack was a hit
    if (hit) {
      mode = "DESTROYING";
      attackHistory.orientation =
        row == attackHistory.initialHit.row ? "h" : "v";
      attackHistory.direction =
        attackHistory.orientation === "h"
          ? Math.sign(col - attackHistory.initialHit.col)
          : Math.sign(row - attackHistory.initialHit.row);
      // Look around to see if we are finished with any directions yet
      const [nextRow, nextCol] = getNextDirectedNeighbor(
        attackHistory.lastAttack.row,
        attackHistory.lastAttack.col,
        attackHistory.orientation,
        attackHistory.direction
      );
      const [oppoRow, oppoCol] = getNextDirectedNeighbor(
        attackHistory.initialHit.row,
        attackHistory.initialHit.col,
        attackHistory.orientation,
        attackHistory.direction * -1
      );
      if (!opponentBoard.attackAllowed(nextRow, nextCol)) {
        attackHistory.numDirectionsFinished += 1;
        attackHistory.direction *= -1;
      }
      if (!opponentBoard.attackAllowed(oppoRow, oppoCol)) {
        attackHistory.numDirectionsFinished += 1;
      }
      if (attackHistory.numDirectionsFinished === 2) {
        mode = "ORIENTING";
        resetAttackHistory();
        return;
      }
    }
  }

  function destroyingLogic() {
    // Get next attack location
    const [row, col] = getNextDirectedNeighbor(
      attackHistory.lastAttack.row,
      attackHistory.lastAttack.col,
      attackHistory.orientation,
      attackHistory.direction
    );

    // If attack is not allowed, need to increment number of finished directions
    if (!opponentBoard.attackAllowed(row, col)) {
      // We finished this direction
      attackHistory.numDirectionsFinished += 1;
      if (attackHistory.numDirectionsFinished === 1) {
        // Still need to go other direction.
        attackHistory.lastAttack.row = attackHistory.initialHit.row;
        attackHistory.lastAttack.col = attackHistory.initialHit.col;
        attackHistory.direction *= -1;
      } else if (attackHistory.numDirectionsFinished === 2) {
        // Finished both directions
        mode = "LOCATING";
        resetAttackHistory();
        locatingLogic();
        return;
      }
    }
    // Attack
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;

    // Look ahead to next turn to see if we need to switch our direction.
    // If this turn wasn't a hit or next neighbor (next turn) not attackable, we finished in this direction
    const [nextRow, nextCol] = getNextDirectedNeighbor(
      row,
      col,
      attackHistory.orientation,
      attackHistory.direction
    );
    if (!hit || !opponentBoard.attackAllowed(nextRow, nextCol)) {
      // We finished this direction
      attackHistory.numDirectionsFinished += 1;
      if (attackHistory.numDirectionsFinished === 1) {
        // Still need to go other direction.
        attackHistory.lastAttack.row = attackHistory.initialHit.row;
        attackHistory.lastAttack.col = attackHistory.initialHit.col;
        attackHistory.direction *= -1;
      } else if (attackHistory.numDirectionsFinished === 2) {
        // Finished both directions
        mode = "LOCATING";
        resetAttackHistory();
      }
    }
  }

  return computer;
}

function getRandomAttackableSpot(board) {
  return getRandomArrayEntry(board.attackableSpots());
}

function getRandomArrayEntry(array) {
  return array[getRandomInt(0, array.length)];
}

function getRandomAttackableNeighbor(board, row, col) {
  const attackableNeighbors = board.attackableSpots().filter(([aRow, aCol]) => {
    return (
      (oneAway(row, aRow) && col === aCol) ||
      (row === aRow && oneAway(col, aCol))
    );
  });
  // console.log("attackable neighbors: ");
  // console.log(attackableNeighbors);
  return getRandomArrayEntry(attackableNeighbors);
}

function getNextDirectedNeighbor(row, col, orientation, direction) {
  return orientation == "h" ? [row, col + direction] : [row + direction, col];
}

function oneAway(a, b) {
  return Math.abs(a - b) === 1;
}
