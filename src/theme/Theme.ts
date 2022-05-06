import { HSL, RGB } from "../color";
import { ThemeUtils } from "../ThemeUtils";
import { Color, CreateColor, CreateColors } from "../color";
import { Serializable } from "pa-common";
import { ThemeParseError } from "./Errors";

/**
 * The theme, the base of the library.
 */
export class Theme implements Serializable {
  private _id: string;
  private _name = "New Theme";
  private _gui: Color = CreateColor("FFFFFF");
  private _background: Color = CreateColor("212121");
  private _players: Color[] = CreateColors(
    "E57373",
    "64B5F6",
    "81C784",
    "FFB74D"
  );
  private _objects: Color[] = CreateColors(
    "F5F5F5",
    "EEEEEE",
    "E0E0E0",
    "BDBDBD",
    "9E9E9E",
    "757575",
    "616161",
    "424242",
    "212121"
  );
  private _backgroundObjects: Color[] = CreateColors(
    "F8BBD0",
    "F48FB1",
    "F06292",
    "EC407A",
    "E91E63",
    "D81B60",
    "C2185B",
    "AD1457",
    "880E4F"
  );

  /**
   * The theme's ID. This value is chosen randomly. This field is read-only.
   */
  public get id(): string {
    return this._id;
  }

  /**
   * The theme's name. This will be visible in the Project Arrhythmia Editor.
   */
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  /**
   * Theme's GUI color, the color of progress bar and trails of the players.
   */
  public get gui(): Color {
    return this._gui;
  }

  public set gui(value: RGB | HSL | string | Color) {
    this._gui = CreateColor(value);
  }

  /**
   * Theme's background color, the color of level background.
   */
  public get background(): Color {
    return this._background;
  }

  public set background(value: RGB | HSL | string | Color) {
    this._background = CreateColor(value);
  }

  /**
   * Theme's 4 colors for players.
   */
  public get players(): Color[] {
    return this._players;
  }

  public set players(value: (RGB | HSL | string | Color)[]) {
    this._players = CreateColors(...value);
  }

  /**
   * Theme's 9 colors for objects.
   */
  public get objects(): Color[] {
    return this._objects;
  }

  public set objects(value: (RGB | HSL | string | Color)[]) {
    this._objects = CreateColors(...value);
  }

  /**
   * Theme's 9 colors for background objects.
   */
  public get backgroundObjects(): Color[] {
    return this._backgroundObjects;
  }

  public set backgroundObjects(value: (RGB | HSL | string | Color)[]) {
    this._backgroundObjects = CreateColors(...value);
  }

  toJson(): any {
    return {
      id: this._id,
      name: this._name,
      gui: this._gui.hex,
      bg: this._background.hex,
      players: this._players.map((c) => c.hex),
      objs: this._objects.map((c) => c.hex),
      bgs: this._backgroundObjects.map((c) => c.hex),
    };
  }

  fromJson(json: any) {
    if (json.name !== undefined) {
      this.name = json.name;
    }
    if (json.gui !== undefined) {
      this.gui = CreateColor(json.gui);
    }

    if (json.bg !== undefined && json.background !== undefined) {
      throw new ThemeParseError(
        `Theme has both bg and background fields: ${json.bg}, ${json.background}`
      );
    }

    if (json.bg !== undefined) {
      this.background = CreateColor(json.bg);
    }

    if (json.background !== undefined) {
      this.background = CreateColor(json.background);
    }

    if (json.players !== undefined) {
      for (let i = 0; i < 4; i++) {
        this.players[i] = CreateColor(json.players[i]) || this.players[i];
      }
    }

    if (json.objs !== undefined && json.objects !== undefined) {
      throw new ThemeParseError(
        `Theme has both objs and objects fields: ${json.objs}, ${json.objects}`
      );
    }

    if (json.objs !== undefined) {
      for (let i = 0; i < 9; i++) {
        this.objects[i] = CreateColor(json.objs[i]) || this.objects[i];
      }
    }

    if (json.objects !== undefined) {
      for (let i = 0; i < 9; i++) {
        this.objects[i] = CreateColor(json.objects[i]) || this.objects[i];
      }
    }

    if (json.bgs !== undefined && json.backgroundObjects !== undefined) {
      throw new ThemeParseError(
        `Theme has both bgs and backgroundObjects fields: ${json.bgs}, ${json.backgroundObjects}`
      );
    }

    if (json.bgs !== undefined) {
      for (let i = 0; i < 9; i++) {
        this.backgroundObjects[i] =
          CreateColor(json.bgs[i]) || this.backgroundObjects[i];
      }
    }

    if (json.backgroundObjects !== undefined) {
      for (let i = 0; i < 9; i++) {
        this.backgroundObjects[i] =
          CreateColor(json.backgroundObjects[i]) || this.backgroundObjects[i];
      }
    }
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * Constructs a new theme.
   * @param json A json object.
   */
  constructor(json: any) {
    this._id = ThemeUtils.randomThemeId();
    this.fromJson(json);
  }
}
