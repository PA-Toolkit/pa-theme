import { ThemeUtils } from "../ThemeUtils";
import { ColorParseError } from "./ColorParseError";
import { HSL, RGB } from "./ColorSpaces";
import { ColorUtils } from "./ColorUtils";

/** The Color object of Project Arrhythmia theme. */
export class Color {
  private _r: number;
  private _g: number;
  private _b: number;

  /**
   * A RGB object of the color.
   */
  public get rgb(): RGB {
    return {
      red: this._r,
      green: this._g,
      blue: this._b,
    };
  }

  public set rgb(rgb: RGB) {
    this.red = ThemeUtils.clamp(rgb.red, 0, 255);
    this.green = ThemeUtils.clamp(rgb.green, 0, 255);
    this.blue = ThemeUtils.clamp(rgb.blue, 0, 255);
  }

  /**
   * Red component of the color.
   */
  public get red(): number {
    return this._r;
  }

  public set red(red: number) {
    this._r = ThemeUtils.clamp(red, 0, 255);
  }

  /**
   * Green component of the color.
   */
  public get green(): number {
    return this._g;
  }

  public set green(green: number) {
    this._g = ThemeUtils.clamp(green, 0, 255);
  }

  /**
   * Blue component of the color.
   */
  public get blue(): number {
    return this._b;
  }

  public set blue(blue: number) {
    this._b = ThemeUtils.clamp(blue, 0, 255);
  }

  /**
   * A HSL object of the color.
   */
  public get hsl(): HSL {
    return ColorUtils.rgbToHsl(this.rgb);
  }

  public set hsl(hsl: HSL) {
    this.rgb = ColorUtils.hslToRgb(hsl);
  }

  /**
   * Hue component of the color.
   */
  public get hue(): number {
    return ColorUtils.rgbToHsl(this.rgb).hue;
  }

  public set hue(hue: number) {
    const hsl = ColorUtils.rgbToHsl(this.rgb);
    hsl.hue = ThemeUtils.clamp(hue, 0, 360);
    this.rgb = ColorUtils.hslToRgb(hsl);
  }

  /**
   * Saturation component of the color.
   */
  public get saturation(): number {
    return ColorUtils.rgbToHsl(this.rgb).saturation;
  }

  public set saturation(saturation: number) {
    const hsl = ColorUtils.rgbToHsl(this.rgb);
    hsl.saturation = ThemeUtils.clamp(saturation, 0, 100);
    this.rgb = ColorUtils.hslToRgb(hsl);
  }

  /**
   * Lightness component of the color.
   */
  public get lightness(): number {
    return ColorUtils.rgbToHsl(this.rgb).lightness;
  }

  public set lightness(lightness: number) {
    const hsl = ColorUtils.rgbToHsl(this.rgb);
    hsl.lightness = ThemeUtils.clamp(lightness, 0, 100);
    this.rgb = ColorUtils.hslToRgb(hsl);
  }

  /**
   * Hex string of the color.
   */
  public get hex(): string {
    return ColorUtils.rgbToHex(this.rgb);
  }

  public set hex(hex: string) {
    this.rgb = ColorUtils.hexToRgb(ColorUtils.validateHex(hex));
  }

  /**
   * Returns the color's Hex string with the `#` prefix.
   * @returns A Hex string with the `#` prefix.
   */
  public toString(): string {
    return `#${this.hex}`;
  }

  /**
   * Constructs a new color.
   * @param color A RGB or HSL color object or a Hex color string.
   */
  constructor(color: any) {
    if (typeof color === "string") {
      this.hex = color;
    } else if ("red" in color) {
      this.rgb = color;
    } else if ("hue" in color) {
      this.hsl = color;
    } else {
      throw new ColorParseError(`Invalid color: ${color}`);
    }
  }
}
