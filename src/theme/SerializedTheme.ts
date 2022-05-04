/**
 * An object with serialized theme, compatible with Project Arrhythmia.
 */
export interface SerializedTheme {
  /**
   * The theme's ID. This value is chosen randomly. This field is read-only.
   */
  readonly id: string;

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
  bg?: string;

  /**
   * Theme's 4 colors for players.
   */
  players?: string[];

  /**
   * Theme's 9 colors for objects.
   */
  objs?: string[];

  /**
   * Theme's 9 colors for background objects.
   */
  bgs?: string[];
}
