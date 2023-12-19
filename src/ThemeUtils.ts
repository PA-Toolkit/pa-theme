import { Utils } from "pa-common";

function randomThemeId(): string {
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += Utils.randInt(10);
  }
  return id;
}

/**
 * Utility functions for working with themes.
 */
export interface ThemeUtils {
  /**
   * Generates a random theme ID.
   * @returns A random 6 digit long theme ID.
   */
  randomThemeId(): string;
}

export const ThemeUtils: ThemeUtils = {
  randomThemeId,
};
