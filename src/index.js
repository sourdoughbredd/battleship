export { createShip };

function createShip(length, name) {
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
