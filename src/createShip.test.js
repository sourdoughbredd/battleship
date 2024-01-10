import { createShip } from ".";

test("creating ship length error detection", () => {
  expect(() => createShip(1, "one")).not.toThrow();
  expect(() => createShip(0, "zero")).toThrow(
    `Cannot create a ship with length (0) less than 1!`
  );
  expect(() => createShip(-1, "negative one")).toThrow(
    `Cannot create a ship with length (-1) less than 1!`
  );
  expect(() => createShip(100, "one hundred")).not.toThrow();
});

test("getName() returns the proper ship name", () => {
  expect(createShip(1, "one").getName()).toBe("one");
  expect(createShip(2, "two").getName()).toBe("two");
  expect(createShip(100, "one hundered").getName()).toBe("one hundered");
});

test("Ship is not sunk until hit is called length times", () => {
  const length = 5;
  const ship = createShip(length, "five");
  for (let i = 0; i < length; i++) {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});

test("Calling hit on a sunken ship throws error and does not alter sunken state", () => {
  const length = 5;
  const ship = createShip(length, "five");
  for (let hits = 0; hits < length; hits++) {
    expect(ship.isSunk()).toBe(false);
    expect(() => ship.hit()).not.toThrow();
  }
  expect(ship.isSunk()).toBe(true);
  // Hit it more than length times
  expect(() => ship.hit()).toThrow();
  expect(ship.isSunk()).toBe(true);
});
