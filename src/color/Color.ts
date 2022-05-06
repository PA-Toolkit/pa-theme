import { ThemeUtils } from "../ThemeUtils";
import { ColorParseError } from "./Errors";
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
    if (rgb.red === undefined && rgb.r === undefined) {
      throw new ColorParseError(
        `The object doesn't have r or red field: ${rgb}`
      );
    }

    if (rgb.red !== undefined && rgb.r !== undefined) {
      throw new ColorParseError(
        `The object has both r and red fields: ${rgb.r} ${rgb.red}`
      );
    }

    if (rgb.red !== undefined) {
      this.red = rgb.red;
    }

    if (rgb.r !== undefined) {
      this.red = rgb.r;
    }

    if (rgb.green === undefined && rgb.g === undefined) {
      throw new ColorParseError(
        `The object doesn't have g or green field: ${rgb}`
      );
    }

    if (rgb.green !== undefined && rgb.g !== undefined) {
      throw new ColorParseError(
        `The object has both g and green fields: ${rgb.g} ${rgb.green}`
      );
    }

    if (rgb.green !== undefined) {
      this.green = rgb.green;
    }

    if (rgb.g !== undefined) {
      this.green = rgb.g;
    }

    if (rgb.blue === undefined && rgb.b === undefined) {
      throw new ColorParseError(
        `The object doesn't have b or blue field: ${rgb}`
      );
    }

    if (rgb.blue !== undefined && rgb.b !== undefined) {
      throw new ColorParseError(
        `The object has both b and blue fields: ${rgb.b} ${rgb.blue}`
      );
    }

    if (rgb.blue !== undefined) {
      this.blue = rgb.blue;
    }

    if (rgb.b !== undefined) {
      this.blue = rgb.b;
    }
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
    // this.rgb = ColorUtils.hslToRgb(hsl);
    const obj: HSL = {};

    if (hsl.hue === undefined && hsl.h === undefined) {
      throw new ColorParseError(
        `The object doesn't have h or hue field: ${hsl}`
      );
    }

    if (hsl.hue !== undefined && hsl.h !== undefined) {
      throw new ColorParseError(
        `The object has both h and hue fields: ${hsl.h} ${hsl.hue}`
      );
    }

    if (hsl.hue !== undefined) {
      obj.hue = hsl.hue;
    }

    if (hsl.h !== undefined) {
      obj.hue = hsl.h;
    }

    if (hsl.saturation === undefined && hsl.s === undefined) {
      throw new ColorParseError(
        `The object doesn't have s or saturation field: ${hsl}`
      );
    }

    if (hsl.saturation !== undefined && hsl.s !== undefined) {
      throw new ColorParseError(
        `The object has both s and saturation fields: ${hsl.s} ${hsl.saturation}`
      );
    }

    if (hsl.saturation !== undefined) {
      obj.saturation = hsl.saturation;
    }

    if (hsl.s !== undefined) {
      obj.saturation = hsl.s;
    }

    if (hsl.lightness === undefined && hsl.l === undefined) {
      throw new ColorParseError(
        `The object doesn't have l or lightness field: ${hsl}`
      );
    }

    if (hsl.lightness !== undefined && hsl.l !== undefined) {
      throw new ColorParseError(
        `The object has both l and lightness fields: ${hsl.l} ${hsl.lightness}`
      );
    }

    if (hsl.lightness !== undefined) {
      obj.lightness = hsl.lightness;
    }

    if (hsl.l !== undefined) {
      obj.lightness = hsl.l;
    }

    this.rgb = ColorUtils.hslToRgb(obj);
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
    } else if ("red" in color || "r" in color) {
      this.rgb = color;
    } else if ("hue" in color || "h" in color) {
      this.hsl = color;
    } else {
      throw new ColorParseError(`Invalid color: ${color}`);
    }
  }
}
