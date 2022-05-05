import { Theme } from "./Theme";
import { ThemeColors } from "./ThemeColors";

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

// TODO: Replace ThemeColors with something else
export function CreateTheme(name: string, colors?: ThemeColors): Theme {
  return new Theme({
    name,
    gui: colors.gui,
    bg: colors.background,
    players: colors.players,
    objs: colors.objects,
    bgs: colors.backgroundObjects,
  });
}

/**
 * Constructs a new theme from JSON object.
 * @param json A JSON object.
 * @returns A new theme.
 */
export function CreateThemeFromJson(json: any): Theme {
  return new Theme(json);
}
