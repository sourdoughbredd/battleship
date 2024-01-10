import { createShip } from ".";

test("creating ship length error detection", () => {
  expect(() => createShip("one", 1)).not.toThrow();
  expect(() => createShip("zero", 0)).toThrow(
    `Cannot create a ship with length (0) less than 1!`
  );
  expect(() => createShip("negative one", -1)).toThrow(
    `Cannot create a ship with length (-1) less than 1!`
  );
  expect(() => createShip("one hundred", 100)).not.toThrow();
});

test("getName() returns the proper ship name", () => {
  expect(createShip("one", 1).getName()).toBe("one");
  expect(createShip("two", 2).getName()).toBe("two");
  expect(createShip("one hundred", 100).getName()).toBe("one hundred");
});

test("Ship is not sunk until hit is called length times", () => {
  const length = 5;
  const ship = createShip("five", length);
  for (let i = 0; i < length; i++) {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});

test("Calling hit on a sunken ship throws error and does not alter sunken state", () => {
  const length = 5;
  const ship = createShip("five", length);
  for (let hits = 0; hits < length; hits++) {
    expect(ship.isSunk()).toBe(false);
    expect(() => ship.hit()).not.toThrow();
  }
  expect(ship.isSunk()).toBe(true);
  // Hit it more than length times
  expect(() => ship.hit()).toThrow();
  expect(ship.isSunk()).toBe(true);
});
