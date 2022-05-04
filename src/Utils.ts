function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function randomThemeId(): string {
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}

/**
 * Utility functions for working with themes.
 */
export interface Utils {
  /**
   * Clamps a number to the range between min and max values.
   * @param value The value to clamp.
   * @param min The lower boundary.
   * @param max The upper boundary.
   * @returns A clamped number.
   */
  clamp(value: number, min: number, max: number): number;

  /**
   * Generates a random theme ID.
   * @returns A random 6 digit long theme ID.
   */
  randomThemeId(): string;
}

export const Utils: Utils = {
  clamp,
  randomThemeId,
};
