import { ThemeUtils } from "../ThemeUtils";
import { Color, CreateColor, CreateColors } from "../color";
import { Serializable } from "pa-common";

/**
 * The theme, the base of the library.
 */
export class Theme implements Serializable {
  /**
   * The theme's ID. This value is chosen randomly. This field is read-only.
   */
  readonly id: string;

  /**
   * The theme's name. This will be visible in the Project Arrhythmia Editor.
   */
  name = "New Theme";

  /**
   * Theme's GUI color, the color of progress bar and trails of the players.
   */
  gui: Color = CreateColor("FFFFFF");

  /**
   * Theme's background color, the color of level background.
   */
  background: Color = CreateColor("212121");

  /**
   * Theme's 4 colors for players.
   */
  players: Color[] = CreateColors("E57373", "64B5F6", "81C784", "FFB74D");

  /**
   * Theme's 9 colors for objects.
   */
  objects: Color[] = CreateColors(
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

  /**
   * Theme's 9 colors for background objects.
   */
  backgroundObjects: Color[] = CreateColors(
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

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      gui: this.gui.hex,
      bg: this.background.hex,
      players: this.players.map((c) => c.hex),
      objs: this.objects.map((c) => c.hex),
      bgs: this.backgroundObjects.map((c) => c.hex),
    };
  }

  fromJson(json: any) {
    if (json.name !== undefined) {
      this.name = json.name;
    }
    if (json.gui !== undefined) {
      this.gui = CreateColor(json.gui);
    }

    if (json.bg !== undefined) {
      this.background = CreateColor(json.bg);
    }

    if (json.players !== undefined) {
      for (let i = 0; i < this.players.length; i++) {
        this.players[i] = CreateColor(json.players[i]) || this.players[i];
      }
    }

    if (json.objs !== undefined) {
      for (let i = 0; i < this.objects.length; i++) {
        this.objects[i] = CreateColor(json.objs[i]) || this.objects[i];
      }
    }

    if (json.bgs !== undefined) {
      for (let i = 0; i < this.backgroundObjects.length; i++) {
        this.backgroundObjects[i] =
          CreateColor(json.bgs[i]) || this.backgroundObjects[i];
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
    this.id = ThemeUtils.randomThemeId();
    this.fromJson(json);
  }
}
