import { Theme } from "./Theme";
import { ThemeConstructor } from "./ThemeConstructor";

/**
 * Constructs a new theme.
 * @returns A new theme.
 */
export function CreateTheme(): Theme;

/**
 * Constructs a new theme.
 * @param name The theme's name.
 * @returns A new theme.
 */
export function CreateTheme(name: string): Theme;

/**
 * Constructs a new theme.
 * @param name The theme's name.
 * @param colors The theme's colors.
 * @returns A new theme.
 */
export function CreateTheme(theme: ThemeConstructor): Theme;

// TODO: Replace ThemeColors with something else
export function CreateTheme(param?: string | ThemeConstructor): Theme {
  if (param === undefined) {
    return new Theme({});
  }
  if (typeof param === "string") {
    return new Theme({ name: param });
  } else {
    return new Theme(param);
  }
}

/**
 * Constructs a new theme from JSON object.
 * @param json A JSON object.
 * @returns A new theme.
 */
export function CreateThemeFromJson(json: any): Theme {
  return new Theme(json);
}
