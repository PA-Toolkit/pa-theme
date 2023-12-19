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

### 🏠 [Homepage](https://github.com/enchart/pa-theme)

## Install

```sh
npm install pa-theme
```

## Usage

```js
import { Theme } from "pa-theme";
```

```js
const { Theme } = require("pa-theme");
```

### Creating a theme

You can create a theme:

- With default colors

```js
const theme = New Theme();
```

```js
const theme = CreateTheme({
  name: "Theme name",
});
```

- With specified colors

```js
const theme = CreateTheme({
  gui: "#FFFFFF",
  background: "#7F7F7F",
});
```

### Working with the theme

Setting the theme's properties

```js
theme.id = "573168"; // MUST be unique
theme.name = "Theme";

theme.gui = "#FFFFFF";
theme.objects = ["#ff0000", "#ffa200", "#bfff00" /* ... */];
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
const fs = require("fs");

const jsonString = fs.readFileSync("theme.lst");
const json = JSON.parse(jsonString);
const theme = new Theme();
theme.fromJson(json);
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/enchart/pa-theme/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [PA Toolkit](https://github.com/pa-toolkit).<br />
This project is [MIT](https://github.com/enchart/pa-theme/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
