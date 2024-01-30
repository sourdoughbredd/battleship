export { createPlayer, createComputerPlayer };

// HUMAN PLAYER
function createPlayer(board, opponentBoard) {
  const name = "player";

  function attack(row, col) {
    opponentBoard.receiveAttack(row, col);
  }

  async function placeShip(name, length, row, col, orientation) {
    board.placeShip(name, length, row, col, orientation);
    return new Promise((resolve) => resolve());
  }

  return {
    name,
    board,
    placeShip,
    attack,
  };
}

// COMPUTER PLAYER AI
function createComputerPlayer(board, opponentBoard, difficulty) {
  // Start with regular player as template, then override methods
  const computer = createPlayer(board, opponentBoard);

  // Overrides
  computer.name = "computer";

  // Repeatedly tries to place the ship at random until a success.
  // Returns the final placement.
  computer.placeShip = function (name, length) {
    const row = getRandomInt(0, board.size);
    const col = getRandomInt(0, board.size);
    const orientation = getRandomOrientation();
    try {
      computer.board.placeShip(name, length, row, col, orientation);
    } catch (e) {
      if (!(e instanceof board.InvalidShipPlacementError)) throw e;
      return computer.placeShip(name, length);
    }
    return { row, col, orientation };
  };

  // Attack a random spot from the set of all allowable spots
  computer.attack = function () {
    if (difficulty === "easy") {
      return computerAttackLogicEasy();
    } else if (difficulty === "medium") {
      return computerAttackLogicMedium();
    } else {
      throw new Error(`Difficulty level requested (${difficulty}) is invalid!`);
    }
  };

  // EASY DIFFICULTY AI LOGIC
  function computerAttackLogicEasy() {
    const [row, col] = getRandomAttackableSpot(opponentBoard);
    opponentBoard.receiveAttack(row, col);
    return { row, col };
  }

  // MEDIUM DIFFICULTY AI LOGIC
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
        return locatingLogic();
      }
      case "ORIENTING": {
        // Last attack was a hit. Now trying to determine orientation of ship
        return orientingLogic();
      }
      case "DESTROYING": {
        // Orientation determined. Destroy ship in one direction, then the other!
        return destroyingLogic();
      }
      default:
        break;
    }
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
      mode = "ORIENTING";
    }
    return { row, col };
  }

  // ORIENTING LOGIC
  function orientingLogic() {
    // Attack a random neighbor of initial hit location
    const rowCol = getRandomAttackableNeighbor(
      opponentBoard,
      attackHistory.initialHit.row,
      attackHistory.initialHit.col
    );
    if (!rowCol) {
      // No neighbors are attackable. Go back to LOCATING
      mode = "LOCATING";
      resetAttackHistory();
      return locatingLogic();
    }
    const [row, col] = rowCol;
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
      const nextRowCol = getNextDirectedNeighbor(
        opponentBoard,
        attackHistory.lastAttack.row,
        attackHistory.lastAttack.col,
        attackHistory.orientation,
        attackHistory.direction
      );
      const oppoRowCol = getNextDirectedNeighbor(
        opponentBoard,
        attackHistory.initialHit.row,
        attackHistory.initialHit.col,
        attackHistory.orientation,
        attackHistory.direction * -1
      );
      if (
        !nextRowCol ||
        !opponentBoard.attackAllowed(nextRowCol[0], nextRowCol[1])
      ) {
        attackHistory.numDirectionsFinished += 1;
        attackHistory.direction *= -1;
      }
      if (
        !oppoRowCol ||
        !opponentBoard.attackAllowed(oppoRowCol[0], oppoRowCol[1])
      ) {
        attackHistory.numDirectionsFinished += 1;
      }
      if (attackHistory.numDirectionsFinished === 2) {
        // Go back to LOCATING for next turn
        mode = "LOCATING";
        resetAttackHistory();
      }
    }
    return { row, col };
  }

  // DESTROYING logic
  function destroyingLogic() {
    // Get next attack location
    const rowCol = getNextDirectedNeighbor(
      opponentBoard,
      attackHistory.lastAttack.row,
      attackHistory.lastAttack.col,
      attackHistory.orientation,
      attackHistory.direction
    );

    // If attack is not allowed, need to increment number of finished directions
    if (!rowCol || !opponentBoard.attackAllowed(rowCol[0], rowCol[1])) {
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
        return locatingLogic();
      }
    }

    const [row, col] = rowCol;
    // Attack
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;

    // Look ahead to next turn to see if we need to switch our direction.
    // If this turn wasn't a hit or next neighbor (next turn) not attackable, we finished in this direction
    const nextRowCol = getNextDirectedNeighbor(
      opponentBoard,
      row,
      col,
      attackHistory.orientation,
      attackHistory.direction
    );
    if (
      !hit ||
      !nextRowCol ||
      !opponentBoard.attackAllowed(nextRowCol[0], nextRowCol[1])
    ) {
      // We finished this direction
      attackHistory.numDirectionsFinished += 1;
      if (attackHistory.numDirectionsFinished === 1) {
        // Still need to go other direction.
        attackHistory.lastAttack.row = attackHistory.initialHit.row;
        attackHistory.lastAttack.col = attackHistory.initialHit.col;
        attackHistory.direction *= -1;
        // Check again if next
      } else if (attackHistory.numDirectionsFinished === 2) {
        // Finished both directions
        mode = "LOCATING";
        resetAttackHistory();
      }
    }
    return { row, col };
  }

  return computer;
}

// UTILITY FUNCS
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomOrientation() {
  return getRandomInt(0, 2) === 0 ? "h" : "v";
}

function getRandomArrayEntry(array) {
  return array[getRandomInt(0, array.length)];
}

function getRandomAttackableSpot(board) {
  return getRandomArrayEntry(board.attackableSpots());
}

function getRandomAttackableNeighbor(board, row, col) {
  const attackableNeighbors = board.attackableSpots().filter(([aRow, aCol]) => {
    return (
      (oneAway(row, aRow) && col === aCol) ||
      (row === aRow && oneAway(col, aCol))
    );
  });
  return getRandomArrayEntry(attackableNeighbors);
}

function getNextDirectedNeighbor(board, row, col, orientation, direction) {
  const [newRow, newCol] =
    orientation == "h" ? [row, col + direction] : [row + direction, col];
  const attackStatus = board.attackStatus(newRow, newCol);
  if (attackStatus == "outOfBounds") {
    return null;
  }
  if (attackStatus == "hit") {
    // Skip this one
    return getNextDirectedNeighbor(
      board,
      newRow,
      newCol,
      orientation,
      direction
    );
  }
  return [newRow, newCol];
}

function oneAway(a, b) {
  return Math.abs(a - b) === 1;
}
