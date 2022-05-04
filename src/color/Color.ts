import { Utils } from "../Utils";
import { ColorParseError } from "./ColorParseError";
import { HSL, RGB } from "./ColorSpaces";
import { ColorUtils } from "./Utils";

/** The Color object of Project Arrhythmia theme. */
export class Color {
  private _rgb: RGB;
  private _hsl: HSL;
  private _hex: string;

  /**
   * A RGB object of the color.
   */
  public get rgb(): RGB {
    return this._rgb;
  }

  public set rgb(rgb: RGB) {
    this._rgb = {
      red: Utils.clamp(rgb.red, 0, 255),
      green: Utils.clamp(rgb.green, 0, 255),
      blue: Utils.clamp(rgb.blue, 0, 255),
    };
    this._hsl = ColorUtils.rgbToHsl(this._rgb);
    this._hex = ColorUtils.rgbToHex(this._rgb);
  }

  /**
   * Red component of the color.
   */
  public get red(): number {
    return this._rgb.red;
  }

  public set red(red: number) {
    this.rgb = { ...this._rgb, red };
  }

  /**
   * Green component of the color.
   */
  public get green(): number {
    return this._rgb.green;
  }

  public set green(green: number) {
    this.rgb = { ...this._rgb, green };
  }

  /**
   * Blue component of the color.
   */
  public get blue(): number {
    return this._rgb.blue;
  }

  public set blue(blue: number) {
    this.rgb = { ...this._rgb, blue };
  }

  /**
   * A HSL object of the color.
   */
  public get hsl(): HSL {
    return this._hsl;
  }

  public set hsl(hsl: HSL) {
    this._hsl = {
      hue: Utils.clamp(hsl.hue, 0, 360),
      saturation: Utils.clamp(hsl.saturation, 0, 100),
      lightness: Utils.clamp(hsl.lightness, 0, 100),
    };
    this._rgb = ColorUtils.hslToRgb(this._hsl);
    this._hex = ColorUtils.hslToHex(this._hsl);
  }

  /**
   * Hue component of the color.
   */
  public get hue(): number {
    return this._hsl.hue;
  }

  public set hue(hue: number) {
    this.hsl = { ...this._hsl, hue };
  }

  /**
   * Saturation component of the color.
   */
  public get saturation(): number {
    return this._hsl.saturation;
  }

  public set saturation(saturation: number) {
    this.hsl = { ...this._hsl, saturation };
  }

  /**
   * Lightness component of the color.
   */
  public get lightness(): number {
    return this._hsl.lightness;
  }

  public set lightness(lightness: number) {
    this.hsl = { ...this._hsl, lightness };
  }

  /**
   * Hex string of the color.
   */
  public get hex(): string {
    return this._hex;
  }

  public set hex(hex: string) {
    this._hex = hex;
    this._rgb = ColorUtils.hexToRgb(hex);
    this._hsl = ColorUtils.hexToHsl(hex);
  }

  /**
   * Returns the color's Hex string with the `#` prefix.
   * @returns A Hex string with the `#` prefix.
   */
  public toString(): string {
    return `#${this._hex}`;
  }

  /**
   * Constructs a new color.
   * @param color A RGB or HSL color object or a Hex color string.
   */
  constructor(color: RGB | HSL | string) {
    if (typeof color === "string") {
      this._rgb = ColorUtils.hexToRgb(color);
      this._hsl = ColorUtils.rgbToHsl(this._rgb);
      this._hex = color;
    } else if ("red" in color) {
      this._rgb = color;
      this._hsl = ColorUtils.rgbToHsl(this._rgb);
      this._hex = ColorUtils.rgbToHex(this._rgb);
    } else if ("hue" in color) {
      this._hsl = color;
      this._rgb = ColorUtils.hslToRgb(this._hsl);
      this._hex = ColorUtils.rgbToHex(this._rgb);
    } else {
      throw new ColorParseError("Invalid color.");
    }
  }
}
