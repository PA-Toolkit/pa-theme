import { SerializedTheme } from "./SerializedTheme";
import { Theme } from "./Theme";
import { ThemeColors } from "./ThemeColors";

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
export function CreateTheme(name: string, colors: ThemeColors): Theme;

export function CreateTheme(name?: string, colors?: ThemeColors): Theme {
  return new Theme(name, colors);
}

/**
 * Constructs a new theme from JSON object.
 * @param json A JSON object.
 * @returns A new theme.
 */
export function CreateThemeFromJson(json: SerializedTheme): Theme {
  return CreateTheme(json.name, {
    gui: json.gui,
    background: json.bg,
    players: json.players,
    objects: json.objs,
    backgroundObjects: json.bgs,
  });
}