export { createShip };

function createShip(length) {
  if (length < 1)
    throw new Error(`Cannot create a ship with length (${length}) less than 1`);
  return {
    length,
    numHits: 0,
    hit() {
      this.numHits += this.isSunk() ? 0 : 1;
    },
    isSunk() {
      return this.numHits >= this.length;
    },
  };
}
