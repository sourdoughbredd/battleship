import { createShip } from "./index.js";

test("creating ship error detection", () => {
  expect(() => createShip(1)).not.toThrow();
  expect(() => createShip(0)).toThrow(
    `Cannot create a ship with length (0) less than 1`
  );
  expect(() => createShip(-1)).toThrow(
    `Cannot create a ship with length (-1) less than 1`
  );
  expect(() => createShip(100)).not.toThrow();
});

test("ship length set properly", () => {
  expect(createShip(1).length).toBe(1);
  expect(createShip(2).length).toBe(2);
  expect(createShip(100).length).toBe(100);
});

test("ship hit function increments numHits and sinks ship", () => {
  const length = 5;
  const ship = createShip(length);
  for (let i = 0; i < length; i++) {
    expect(ship.numHits).toBe(i);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
  }
  expect(ship.numHits).toBe(length);
  expect(ship.isSunk()).toBe(true);
});
