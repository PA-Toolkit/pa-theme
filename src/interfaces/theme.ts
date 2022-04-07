import Color from "color";
import DefaultThemes from "../utils/defaultThemes";

/** A Project Arrhythmia level theme, which contains a name, a unique ID and colors for GUI, background, players, objects and background objects. */
interface Theme {
  /** Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string. */
  id: string;

  /** Unique name of the theme. */
  name: string;

  /** GUI color, the color of progress bar and players' trails. */
  gui: Color;

  /** A color of level's background. */
  bg: Color;

  /** An array with 4 colors for players. */
  players: Color[];

  /** An array with 9 colors for objects.  */
  objs: Color[];

  /** An array with 9 colors for background objects.  */
  bgs: Color[];

  /**
   * Converts theme to a normal object by converting theme's colors into hex color strings without number sign.
   * @returns An object with theme's ID, name and color strings.
   */
  object(): object;

  /**
   * Converts theme to a JSON string.
   * @returns A JSON string which can be used as a Project Arrhythmia theme.
   */
  json(): string;
}

interface ThemeConstructor {
  /** Generates a new theme from an object.
   * @returns A new theme.
   */
  (
    /** An object with Theme-like properties. */
    object?: Theme
  ): Theme;

  /** Generates a new theme.
   * @returns A new theme.
   */
  (
    /** Theme's unique name. Default name is `Theme`. */
    name?: string,

    /** GUI color, the color of progress bar and players' trails. Default color is `#ffffff`. */
    gui?: Color | string,

    /** A color of level's background. Default color is `#000000`. */
    bg?: Color | string,

    /** An array with 4 colors for players. Default colors are `#ffffff`. */
    players?: Color[] | string[] | Color | string,

    /** An array with 9 colors for objects. Default colors are `#ffffff`. */
    objs?: Color[] | string[] | Color | string,

    /** An array with 9 colors for background objects. Default colors are `#ffffff`. */
    bgs?: Color[] | string[] | Color | string,

    /** Theme's unique ID, which is a 6-digit long numeric string. If not provided, a random one is generated. */
    id?: string | number
  ): Theme;

  /** Generates a new theme.
   * @returns A new theme.
   */
  new (
    /** Theme's unique name. Default name is `Theme`. */
    name?: string,

    /** GUI color, the color of progress bar and players' trails. Default color is `#ffffff`. */
    gui?: Color | string,

    /** A color of level's background. Default color is `#000000`. */
    bg?: Color | string,

    /** An array with 4 colors for players. Default colors are `#ffffff`. */
    players?: Color[] | string[] | Color | string,

    /** An array with 9 colors for objects. Default colors are `#ffffff`. */
    objs?: Color[] | string[] | Color | string,

    /** An array with 9 colors for background objects. Default colors are `#ffffff`. */
    bgs?: Color[] | string[] | Color | string,

    /** Theme's unique ID, which is a 6-digit long numeric string. If not provided, a random one is generated. */
    id?: string | number
  ): Theme;

  /** Generates a new theme from an object.
   * @returns A new theme.
   */
  new (
    /** An object with Theme-like properties. */
    object?: Theme
  ): Theme;

  /** Generates a new theme from a JSON string.
   * @returns A new theme.
   */
  json(
    /** A JSON string with Theme-like properties. */
    string: string
  ): Theme;

  /** An array with 9 default themes from Project Arrhythmia's Level Editor. */
  default: DefaultThemes;
}

const Theme: ThemeConstructor = function (
  this: Theme | void,
  nameOrObject?: string | object,
  gui?: Color | string,
  bg?: Color | string,
  players?: Color[] | string[] | Color | string,
  objs?: Color[] | string[] | Color | string,
  bgs?: Color[] | string[] | Color | string,
  id?: string | number
) {
  if (!(this instanceof Theme)) {
    if (typeof nameOrObject === "object") {
      const obj: Theme = nameOrObject as Theme;
      return new Theme(
        obj.name,
        obj.gui,
        obj.bg,
        obj.players,
        obj.objs,
        obj.bgs,
        obj.id
      );
    } else {
      return new Theme(nameOrObject, gui, bg, players, objs, bgs, id);
    }
  }

  if (typeof id === "string" && /\d{6}/.test(id)) {
    this.id = id;
  } else if (typeof id === "number") {
    this.id = ("000000" + Math.min(Math.max(id, 0), 999999)).slice(-6);
  } else {
    this.id = Math.floor(Math.random() * 1000000).toString();
  }

  if (typeof nameOrObject === "string") {
    this.name = nameOrObject;
  } else {
    this.name = "Theme";
  }

  if (gui instanceof Color) {
    this.gui = gui;
  } else if (typeof gui === "string") {
    this.gui = Color(gui);
  } else {
    this.gui = Color("#ffffff");
  }

  if (bg instanceof Color) {
    this.bg = bg;
  } else if (typeof bg === "string") {
    this.bg = Color(bg);
  } else {
    this.bg = Color("#000000");
  }

  if (Array.isArray(players)) {
    this.players = Array.from({ length: 4 }, (_, i) => {
      if (players[i] instanceof Color) {
        return players[i] as Color;
      } else if (typeof players[i] === "string") {
        return Color(players[i]);
      }
      return Color("#ffffff");
    });
  } else if (players instanceof Color) {
    this.players = Array.from({ length: 4 }, () => players);
  } else if (typeof players === "string") {
    this.players = Array.from({ length: 4 }, () => Color(players));
  } else {
    this.players = Array.from({ length: 4 }, () => Color("#ffffff"));
  }

  if (Array.isArray(objs)) {
    this.objs = Array.from({ length: 9 }, (_, i) => {
      if (objs[i] instanceof Color) {
        return objs[i] as Color;
      } else if (typeof objs[i] === "string") {
        return Color(objs[i]);
      }
      return Color("#ffffff");
    });
  } else if (objs instanceof Color) {
    this.objs = Array.from({ length: 9 }, () => objs);
  } else if (typeof objs === "string") {
    this.objs = Array.from({ length: 9 }, () => Color(objs));
  } else {
    this.objs = Array.from({ length: 9 }, () => Color("#ffffff"));
  }

  if (Array.isArray(bgs)) {
    this.bgs = Array.from({ length: 9 }, (_, i) => {
      if (bgs[i] instanceof Color) {
        return bgs[i] as Color;
      } else if (typeof bgs[i] === "string") {
        return Color(bgs[i]);
      }
      return Color("#000000");
    });
  } else if (bgs instanceof Color) {
    this.bgs = Array.from({ length: 9 }, () => bgs);
  } else if (typeof bgs === "string") {
    this.bgs = Array.from({ length: 9 }, () => Color(bgs));
  } else {
    this.bgs = Array.from({ length: 9 }, () => Color("#000000"));
  }

  this.object = function (): object {
    return {
      name: this.name,
      id: this.id,
      gui: this.gui.hex().substring(1),
      bg: this.bg.hex().substring(1),
      players: this.players.map((c) => c.hex().substring(1)),
      objs: this.objs.map((c) => c.hex().substring(1)),
      bgs: this.bgs.map((c) => c.hex().substring(1)),
    };
  };

  this.json = function (): string {
    return JSON.stringify(this.object());
  };
} as ThemeConstructor;

Theme.json = function (string: string): Theme {
  return Theme(JSON.parse(string));
};

Theme.default = DefaultThemes;

export default Theme;
