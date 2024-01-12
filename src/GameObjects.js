export { createShip, createGameboard, createPlayer };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

function createGameboard() {
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
    validateRowCol(row, col);
    if (orientation !== "h" && orientation !== "v") {
      throw new Error(
        `Orientation must be 'h' or 'v'! Value provided: ${orientation}`
      );
    }
    if (orientation === "h" && col + length > BOARD_SIZE) {
      throw new Error(
        `Horizontally placing ship of length ${length} at row ${row}, col ${col} would violate board bounds!`
      );
    }
    if (orientation === "v" && row + length > BOARD_SIZE) {
      throw new Error(
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
        throw new Error(
          `Ship placement intersects a ship that is already on the board!`
        );
      }
    }
  }

  const placeShip = function (name, length, row, col, orientation) {
    validateShipPlacement(length, row, col, orientation);

    const ship = createShip(name, length);
    for (let delta = 0; delta < length; delta++) {
      if (orientation == "h") {
        _ships[row][col + delta] = ship;
      } else {
        _ships[row + delta][col] = ship;
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
      if (_ships[row][col].isSunk()) {
        _numShipsLeft -= 1;
      }
    }
  };

  const attackStatus = function (row, col) {
    return _attacks[row][col];
  };

  const attackAllowed = function (row, col) {
    validateRowCol(row, col);
    return attackStatus(row, col) === null;
  };

  return {
    placeShip,
    hasShip,
    allShipsSunk,
    receiveAttack,
    attackStatus,
    attackAllowed,
  };
}

function createPlayer() {
  function placeShip(board, name, length, row, col, orientation) {
    board.placeShip(name, length, row, col, orientation);
  }

  function attack(player, row, col) {
    player.board.receiveAttack(row, col);
  }

  return {
    placeShip,
    attack,
  };
}

// function createComputerPlayer() {
//   const computer = createPlayer();

//   const ships = {
//     Carrier: 5,
//     Battleship: 4,
//     Destroyer: 3,
//     Submarine: 3,
//     "Patrol Boat": 2,
//   };

//   function placeShips() {
//     for (const [name, length] in ships) {
//       randomShipPlacement(name, length);
//     }
//   }

//   // Recursively tries to place the ship at random until a success
//   function randomShipPlacement(name, length) {
//     try {
//       computer.placeShip(
//         name,
//         length,
//         getRandomInt(0, BOARD_SIZE),
//         getRandomInt(0, BOARD_SIZE),
//         getRandomOrientation()
//       );
//     } catch {
//       randomShipPlacement(name, length);
//     }
//   }

//   return {
//     ...computer,
//     placeShips,
//   };
// }
