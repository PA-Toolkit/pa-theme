import { Color } from "./Color";
import { RGB, HSL } from "./ColorSpaces";

/**
 * Constructs a new color.
 * @param color A RGB or HSL object or a Hex string.
 * @returns A new color.
 */
export function CreateColor(color: RGB | HSL | string): Color {
  return new Color(color);
}

/**
 * Constructs a new array of colors.
 * @param colors An array of RGB or HSL objects or Hex strings.
 * @returns A new array of colors.
 */
export function CreateColors(colors: (RGB | HSL | string)[]): Color[] {
  return colors.map(CreateColor);
}
