import { Serializable } from "pa-common";
import { ThemeUtils } from "../ThemeUtils";
import { ThemeParams } from "./ThemeParams";

/**
 * The theme, the base of the library.
 */
export class Theme implements Serializable {
  /**
   * The theme's ID. This value is chosen randomly. This field is read-only.
   */
  id: string;

  /**
   * The theme's name. This will be visible in the Project Arrhythmia Editor.
   */
  name = "New Theme";

  /**
   * Theme's GUI color, the color of progress bar and trails of the players.
   */
  gui = "FFFFFF";

  /**
   * Theme's background color, the color of level background.
   */
  background = "212121";

  /**
   * Theme's 4 colors for players.
   */
  players: string[] = ["E57373", "64B5F6", "81C784", "FFB74D"];

  /**
   * Theme's 9 colors for objects.
   */
  objects: string[] = [
    "F5F5F5",
    "EEEEEE",
    "E0E0E0",
    "BDBDBD",
    "9E9E9E",
    "757575",
    "616161",
    "424242",
    "212121",
  ];

  /**
   * Theme's 9 colors for background objects.
   */
  backgroundObjects: string[] = [
    "F8BBD0",
    "F48FB1",
    "F06292",
    "EC407A",
    "E91E63",
    "D81B60",
    "C2185B",
    "AD1457",
    "880E4F",
  ];

  /**
   * Constructs a new theme.
   * @param params Theme parameters.
   */
  constructor(params?: ThemeParams) {
    this.id = ThemeUtils.randomThemeId();
    if (params) {
      this.fromJson({
        id: params.id,
        name: params.name,
        gui: params.gui,
        bg: params.background,
        players: params.players,
        objs: params.objects,
        bgs: params.backgroundObjects,
      });
    }
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      gui: this.gui,
      bg: this.background,
      players: this.players,
      objs: this.objects,
      bgs: this.backgroundObjects,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  fromJson(json: any) {
    if (json.id !== undefined) {
      this.id = json.id;
    }
    if (json.name !== undefined) {
      this.name = json.name;
    }
    if (json.gui !== undefined) {
      this.gui = json.gui;
    }
    if (json.bg !== undefined) {
      this.background = json.bg;
    }
    if (json.players !== undefined) {
      this.players = json.players;
    }
    if (json.objs !== undefined) {
      this.objects = json.objs;
    }
    if (json.bgs !== undefined) {
      this.backgroundObjects = json.bgs;
    }
  }
}
