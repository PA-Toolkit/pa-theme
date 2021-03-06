import { Color, RGB, HSL } from "../color";

/**
 * The object with the theme's colors.
 */
export interface ThemeConstructor {
  /**
   * The theme's name. This will be visible in the Project Arrhythmia Editor.
   */
  name?: string;

  /**
   * Theme's GUI color, the color of progress bar and trails of the players.
   */
  gui?: Color | RGB | HSL | string;

  /**
   * Theme's background color, the color of level background.
   */
  background?: Color | RGB | HSL | string;

  /**
   * Theme's background color, the color of level background.
   */
  bg?: Color | RGB | HSL | string;

  /**
   * Theme's 4 colors for players.
   */
  players?: (Color | RGB | HSL | string)[];

  /**
   * Theme's 9 colors for objects.
   */
  objects?: (Color | RGB | HSL | string)[];

  /**
   * Theme's 9 colors for objects.
   */
  objs?: (Color | RGB | HSL | string)[];

  /**
   * Theme's 9 colors for background objects.
   */
  backgroundObjects?: (Color | RGB | HSL | string)[];

  /**
   * Theme's 9 colors for background objects.
   */
  bgs?: (Color | RGB | HSL | string)[];
}
