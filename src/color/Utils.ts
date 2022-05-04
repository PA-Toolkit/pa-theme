import { Utils } from "../Utils";
import { ColorParseError } from "./ColorParseError";
import { HSL, RGB } from "./ColorSpaces";

// Color conversion functions from "color-convert" package.

function rgbToHsl(rgb: RGB): HSL {
  if (isNaN(rgb.red) || isNaN(rgb.green) || isNaN(rgb.blue)) {
    throw new ColorParseError(
      `Invalid RGB object: ${rgb.red}, ${rgb.green}, ${rgb.blue}`
    );
  }

  const r = rgb.red / 255;
  const g = rgb.green / 255;
  const b = rgb.blue / 255;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  const l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return {
    hue: h,
    saturation: s * 100,
    lightness: l * 100,
  };
}

function hslToRgb(hsl: HSL): RGB {
  if (isNaN(hsl.hue) || isNaN(hsl.saturation) || isNaN(hsl.lightness)) {
    throw new ColorParseError(
      `Invalid HSL object: ${hsl.hue}, ${hsl.saturation}, ${hsl.lightness}`
    );
  }

  const h = hsl.hue / 360;
  const s = hsl.saturation / 100;
  const l = hsl.lightness / 100;

  let t2;
  let t3;
  let val;

  if (s === 0) {
    val = l * 255;
    return {
      red: val,
      green: val,
      blue: val,
    };
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  const t1 = 2 * l - t2;

  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + (1 / 3) * -(i - 1);
    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return {
    red: rgb[0],
    green: rgb[1],
    blue: rgb[2],
  };
}

function rgbToHex(rgb: RGB): string {
  if (isNaN(rgb.red) || isNaN(rgb.green) || isNaN(rgb.blue)) {
    throw new ColorParseError(
      `Invalid RGB object: ${rgb.red}, ${rgb.green}, ${rgb.blue}`
    );
  }

  const integer =
    ((Math.round(rgb.red) & 0xff) << 16) +
    ((Math.round(rgb.green) & 0xff) << 8) +
    (Math.round(rgb.blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
}

function hexToRgb(hex: string): RGB {
  const match = hex.match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    throw new ColorParseError(`Invalid Hex string: ${hex}`);
  }

  let colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString
      .split("")
      .map((char) => {
        return char + char;
      })
      .join("");
  }

  const integer = parseInt(colorString, 16);
  const r = (integer >> 16) & 0xff;
  const g = (integer >> 8) & 0xff;
  const b = integer & 0xff;

  return {
    red: r,
    green: g,
    blue: b,
  };
}

function hslToHex(hsl: HSL): string {
  return rgbToHex(hslToRgb(hsl));
}

function hexToHsl(hex: string): HSL {
  return rgbToHsl(hexToRgb(hex));
}

function validateHex(hex: string): string {
  let newHex = hex;

  if (newHex.startsWith("#")) {
    newHex = newHex.substring(1);
  }
  if (newHex.length === 6) {
    return newHex;
  }
  if (newHex.length === 3) {
    return (
      newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2]
    );
  } else {
    throw new ColorParseError(`Invalid Hex string: ${hex}`);
  }
}

/**
 * Utility functions for working with colors.
 */
export interface ColorUtils {
  /**
   * Converts a color from RGB to HSL.
   * @param rgb A RGB object.
   * @returns A HSL object.
   */
  rgbToHsl(rgb: RGB): HSL;

  /**
   * Converts a color from HSL to RGB.
   * @param hsl A HSL object.
   * @returns A RGB object.
   */
  hslToRgb(hsl: HSL): RGB;

  /**
   * Converts a color from RGB to Hex.
   * @param rgb A RGB object.
   * @returns A Hex string.
   */
  hexToRgb(hex: string): RGB;

  /**
   * Converts a color from Hex to RGB.
   * @param hex A Hex string.
   * @returns A RGB object.
   */
  rgbToHex(rgb: RGB): string;

  /**
   * Converts a color from HSL to Hex.
   * @param hsl A HSL object.
   * @returns A Hex string.
   */
  hslToHex(hsl: HSL): string;

  /**
   * Converts a color from Hex to HSL.
   * @param hex A Hex string.
   * @returns A HSL object.
   */
  hexToHsl(hex: string): HSL;

  /**
   * Validates a Hex string.
   * @param hex A Hex string.
   * @returns A validated Hex string.
   */
  validateHex(hex: string): string;
}

export const ColorUtils: ColorUtils = {
  rgbToHsl,
  hslToRgb,
  rgbToHex,
  hexToRgb,
  hslToHex,
  hexToHsl,
  validateHex,
};
