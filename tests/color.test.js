const Theme = require("..");
const Color = require("color");

test("not passing color", () => {
  expect(Theme().bg.hex()).toBe("#000000");
});

test("passing valid hex string", () => {
  expect(Theme({ bg: "#ff0000" }).bg.hex()).toBe("#FF0000");
});

test("passing valid rgb string", () => {
  expect(Theme({ bg: "rgb(255, 0, 0)" }).bg.hex()).toBe("#FF0000");
});

test("passing valid color object", () => {
  expect(Theme({ bg: Color("#ff0000") }).bg.hex()).toBe("#FF0000");
});

test("passing invalid hex string", () => {
  expect(() => {
    Theme({ bg: "#ff" });
  }).toThrow();
});

test("passing invalid color object", () => {
  expect(Theme({ bg: {} }).bg.hex()).toBe("#000000");
});
