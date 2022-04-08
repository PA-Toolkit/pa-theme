# pa-theme

A library for creating and editing [Project Arrhythmia](https://store.steampowered.com/app/440310/Project_Arrhythmia/) themes.

## Installation

Using **npm**:

```console
npm install pa-theme --save-dev
```

Using **yarn**:

```console
yarn add -D pa-theme
```

## Usage

### Adding to script

```cjs
const Theme = require("pa-theme");
```

or

```js
import Theme from "pa-theme";
```

### Constructors

```js
const theme = Theme("Theme");
const theme = new Theme("Red", "#FF0000", "#000000");
const theme = Theme({ name: "Blue", bg: "#7F7F7F" });
const theme = new Theme.json('{"name": "JsonTheme", "id": "000000"}');
```

- Default ID is a randomly generated 6-digit long numeric string.
- Default name of the theme is "Theme".
- Default colors are either `#000000` or `#ffffff`, you can use CSS color strings for them.

### Properties

#### Colors

```js
theme.id; // "123456"
theme.name; // "Theme"

theme.gui.hex(); // "#FFFFFF"
theme.bg.hex(); // "000000"

theme.players[3].hex(); // ["#FFFFFF"]
theme.objs[8].hex(); // ["#FFFFFF"]
theme.bgs[8].hex(); // ["#000000"]
```

- `gui` and `bg` are Color objects
- `players` is an array with 4 Color objects
- `objs` and `bgs` are arrays with 9 Color objects

All properties and getters for colors are inherited from [Color](https://www.npmjs.com/package/color) library.

#### Theme

```js
theme.object(); // {id: "123456", name: "Theme", gui: "FFFFFF", ... }
theme.json(); // "{"id": "123456", "name": "Theme", "gui": "FFFFFF", ... }"
```

- `object()` returns an object with all **Color** objects converted to hex color strings without `#` number sign that are compatible with Project Arrhythmia.
- `json()` returns a string that can be used as a Project Arrhythmia theme.

### Default themes

The library provides 9 default themes from Project Arrhythmia's level editor.

```js
Theme.default.machine(); // {name: "Machine", id: "123456", ...}
Theme.default.anarchy("Different name"); // {name: "Different name", id: "123456", ...}
Theme.default.dayNight("Different name", "000000"); // {name: "Different name", id: "000000", ...}
```
