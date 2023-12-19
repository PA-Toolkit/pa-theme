/*
  Theme generator test.
*/

const { Theme } = require("..");
const fs = require("fs");

// Create new theme, leave unassigned colors to default.
const theme = new Theme({
  name: "Rainbow",
  gui: "FFFFFF",
  players: ["E57373", "64B5F6", "E57373", "64B5F6"],
});

// Change theme's background color.
theme.background = "#000000";

// Change objects colors.
theme.objects = [
  "ff0000",
  "ffa200",
  "bfff00",
  "1eff00",
  "00ff80",
  "00ddff",
  "0040ff",
  "6200ff",
  "ff00ff",
];

// Background objects colors are default.

// Write test.
if (!fs.existsSync("test/result")) {
  fs.mkdirSync("test/result");
}
fs.writeFileSync("test/result/rainbow.lst", theme.toString(), {
  flag: "w+",
});

// Read test.
const jsonString = fs.readFileSync("test/result/rainbow.lst", "utf8");
const readTheme = new Theme();
console.log(jsonString);
readTheme.fromJson(JSON.parse(jsonString));

// Remove first 14 characters because those are IDs and they're not equal.
console.log(theme.toString() === jsonString ? "Test passed!" : "Test failed!");
