/*
  Theme generator test.
*/

const {
  CreateTheme,
  CreateColor,
  CreateColors,
  CreateThemeFromJson,
  Theme,
} = require("..");
const fs = require("fs");

// Create new theme, leave unassigned colors to default.
const theme = CreateTheme({
  name: "Rainbow",
  gui: "FFFFFF",
  players: [
    "#E57373",
    CreateColor("64B5F6"),
    {
      red: 129,
      green: 199,
      blue: 132,
    },
    {
      hue: 36,
      saturation: 100,
      lightness: 65,
    },
  ],
});

// Change theme's background color.
theme.background = CreateColor("#000");

// Change objects colors.
theme.objects = CreateColors(
  "#ff0000",
  "#ffa200",
  "#bfff00",
  "#1eff00",
  "#00ff80",
  "#00ddff",
  "#0040ff",
  "#6200ff",
  "#ff00ff"
);

// Background objects colors are default.

// Write test.
if (!fs.existsSync("test/result")) {
  fs.mkdirSync("test/result");
}
fs.writeFileSync("test/result/rainbow.lst", theme.toString(), { flag: "w+" });

// Read test.
const jsonString = fs.readFileSync("test/result/rainbow.lst", "utf8");
const readTheme = CreateThemeFromJson(JSON.parse(jsonString));

// Remove first 14 characters because those are IDs and they're not equal.
console.log(
  readTheme.toString().substring(14, readTheme.toString().length - 1) ===
    jsonString.substring(14, jsonString.length - 1)
    ? "Test passed!"
    : "Test failed!"
);

console.log(CreateTheme({ name: "Test", gui: "7F7F7F" }));
