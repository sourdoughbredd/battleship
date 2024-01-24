export { createPlayer, createComputerPlayer };

// HUMAN PLAYER
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

// COMPUTER PLAYER AI
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

  // EASY DIFFICULTY AI LOGIC
  function computerAttackLogicEasy() {
    const [row, col] = getRandomAttackableSpot(opponentBoard);
    opponentBoard.receiveAttack(row, col);
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

  // ORIENTING LOGIC
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

  // DESTROYING logic
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
        // Check again if next
      } else if (attackHistory.numDirectionsFinished === 2) {
        // Finished both directions
        mode = "LOCATING";
        resetAttackHistory();
      }
    }
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

function getNextDirectedNeighbor(row, col, orientation, direction) {
  return orientation == "h" ? [row, col + direction] : [row + direction, col];
}

function oneAway(a, b) {
  return Math.abs(a - b) === 1;
}
