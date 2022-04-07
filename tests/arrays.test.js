const Theme = require("..");
const Color = require("color");

test("passing array of hex strings", () => {
  expect(
    Theme({ players: ["#ff0000", "#ff0000", "#ff0000", "#ff0000"] }).players
  ).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
  ]);
});

test("passing array of colors", () => {
  expect(
    Theme({
      players: [
        Color("#ff0000"),
        Color("#ff0000"),
        Color("#ff0000"),
        Color("#ff0000"),
      ],
    }).players
  ).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
  ]);
});

test("passing array of invalid hex strings", () => {
  expect(() => {
    Theme({ players: ["#ff", "#ff", "#ff", "#ff"] }).players;
  }).toThrow();
});

test("passing a hex string", () => {
  expect(Theme({ players: "#ff0000" }).players).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
  ]);
});

test("passing a color", () => {
  expect(Theme({ players: Color("#ff0000") }).players).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
  ]);
});

test("passing an insufficient array of hex strings", () => {
  expect(Theme({ players: ["#ff0000", "#ff0000"] }).players).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ffffff"),
    Color("#ffffff"),
  ]);
});

test("passing an insufficient array of colors", () => {
  expect(
    Theme({ players: [Color("#ff0000"), Color("#ff0000")] }).players
  ).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ffffff"),
    Color("#ffffff"),
  ]);
});

test("passing an overflowed array of hex strings", () => {
  expect(
    Theme({ players: ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff0000"] })
      .players
  ).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
  ]);
});

test("passing an overflowed array of colors", () => {
  expect(
    Theme({
      players: [
        Color("#ff0000"),
        Color("#ff0000"),
        Color("#ff0000"),
        Color("#ff0000"),
        Color("#ff0000"),
      ],
    }).players
  ).toStrictEqual([
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
    Color("#ff0000"),
  ]);
});
