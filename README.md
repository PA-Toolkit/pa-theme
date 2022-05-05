<h1 align="center">Welcome to pa-theme 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/pa-theme" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/pa-theme.svg">
  </a>
  <a href="https://github.com/enchart/pa-theme#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/enchart/pa-theme/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/enchart/pa-theme/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/enchart/pa-theme" />
  </a>
</p>

> Creates and edits Project Arrhythmia themes.

### 🏠 [Homepage](https://github.com/enchart/pa-prefab)

## Install

```sh
npm install pa-theme
```

## Usage

```js
import { CreateTheme, CreateColor, ... } from "pa-theme";
```

```js
const { CreateTheme, CreateColor, ... } = require("pa-theme");
```

### Creating a theme

You can create a theme:

- With default colors

```js
const theme = CreateTheme("Theme");
```

```js
const theme = CreateTheme({
  name: "Theme",
});
```

- With specified colors

```js
const theme = CreateTheme({
  gui: "#FFFFFF",
  background: {
    red: 0,
    green: 0,
    blue: 0,
  },
});
```

NOTE: You can only use either short or long property (e.g. either `bg` or `background`) in a single constructor object.

### Creating a color

You can create a color from:

- A Hex string

```js
const color = CreateColor("#FFFFFF");
const color = CreateColor("#fff");
const color = CreateColor("FFFFFF");
```

- A RGB object

```js
const color = CreateColor({
  red: 255,
  green: 255,
  blue: 255,
});
```

- A HSL object

```js
const color = CreateColor({
  hue: 0,
  saturation: 0,
  lightness: 100,
});
```

Creating multiple colors:

```js
const colors = CreateColors(
  "#FFFFFF",
  "fff",
  {
    red: 255,
    green: 255,
    blue: 255,
  },
  ...
);
```

### Working with the theme

Setting the theme's name

```js
theme.name = "Theme";
```

Setting the theme's colors

```js
theme.gui = CreateColor("#FFFFFF");
theme.objects = CreateColors("#ff0000", "#ffa200", "#bfff00", ... );
```

### Working with the color

Setting the color's RGB values.

```js
color.red = 255;
color.rgb = {
  red: 255,
  green: 255,
  blue: 255,
};
```

Setting the color's HSL values.

```js
color.hue = 0;
color.hsl = {
  hue: 0,
  saturation: 0,
  value: 100,
};
```

Setting the color's Hex string.

```js
color.hex = "#FFFFFF";
```

Getting the color's Hex string.

```js
color.hex; // "FFFFFF"
color.toString(); // "#FFFFFF"
```

Converting colors:

```js
const { ColorUtils } = require("pa-theme");
const rgb = {
  r: 255,
  g: 255,
  b: 255,
};
const hsl = ColorUtils.rgbToHsl(rgb);
const newRgb = ColorUtils.hslToRgb(hsl);

rgb; // { r: 255, g: 255, b: 255 }
newRgb; // { r: 255, g: 255, b: 255 }
```

### Building the theme

You can convert the theme to a JSON string/object, then write it to a file.

```js
const fs = require("fs");

fs.writeFileSync("theme.lst", theme.toString());
```

### Reading the theme

You can read an existing theme from the string/object.

```js
const { CreateThemeFromJson } = require("pa-theme");
const fs = require("fs");

const jsonString = fs.readFileSync("theme.lst");
const json = JSON.parse(jsonString);
const theme = CreateThemeFromJson(json);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/enchart/pa-prefab/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [PA Toolkit](https://github.com/pa-toolkit).<br />
This project is [MIT](https://github.com/enchart/pa-theme/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
