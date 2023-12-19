/**
 * The object with the theme's parameters.
 */
export interface ThemeParams {
  /**
   * The theme's ID. This value is chosen randomly. This field is read-only.
   */
  id?: string;

  /**
   * The theme's name. This will be visible in the Project Arrhythmia Editor.
   */
  name?: string;

  /**
   * Theme's GUI color, the color of progress bar and trails of the players.
   */
  gui?: string;

  /**
   * Theme's background color, the color of level background.
   */
  background?: string;

  /**
   * Theme's 4 colors for players.
   */
  players?: string[];

  /**
   * Theme's 9 colors for objects.
   */
  objects?: string[];
  /**
   * Theme's 9 colors for background objects.
   */
  backgroundObjects?: string[];
}
