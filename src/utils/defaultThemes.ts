import Theme from "../interfaces/theme";

interface DefaultThemes {
  /** "Machine" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Machine" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  machine(name?: string, id?: string | number): Theme;

  /** "Anarchy" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Anarchy" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  anarchy(name?: string, id?: string | number): Theme;

  /** "Day Night" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Day Night" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  dayNight(name?: string, id?: string | number): Theme;

  /** "Donuts" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Donuts" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  donuts(name?: string, id?: string | number): Theme;

  /** "Classic" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Classic" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  classic(name?: string, id?: string | number): Theme;

  /** "New" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "New" is used.
   * @param id Theme'Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.  */
  "new"(name?: string, id?: string | number): Theme;

  /** "Dark" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Dark" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  dark(name?: string, id?: string | number): Theme;

  /** "Black/White" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "Black/White" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  blackWhite(name?: string, id?: string | number): Theme;

  /** "White/Black" default theme from Project Arrhythmia's Level
   * @param name Unique name of the theme. If not provided, "White/Black" is used.
   * @param id Theme's unique ID, which is a randomly generated (or provided) 6-digit long numeric string.
   */
  whiteBlack(name?: string, id?: string | number): Theme;
}

const DefaultThemes: DefaultThemes = {
  machine: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Machine",
      "#94D8DB",
      "#212121",
      ["#E57373", "#64B5F6", "#81C784", "#FFB74D"],
      [
        "#C0ACE1",
        "#F17BB8",
        "#2F426D",
        "#1B1B1C",
        "#EFEBEF",
        "#EFEBEF",
        "#EFEBEF",
        "#EFEBEF",
        "#EFEBEF",
      ],
      [
        "#94D8DB",
        "#D8FFE0",
        "#E0FFD5",
        "#F1FFC4",
        "#FEFEC0",
        "#F2C7B7",
        "#F2C7B7",
        "#F2C7B7",
        "#F2C7B7",
      ],
      id
    );
  },
  anarchy: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Anarchy",
      "#FFFFFF",
      "#212121",
      ["#E57373", "#64B5F6", "#81C784", "#FFB74D"],
      [
        "#FFE7E7",
        "#C0ACE1",
        "#F17BB8",
        "#2F426D",
        "#4076DF",
        "#6CCBCF",
        "#1B1B1C",
        "#EFEBEF",
        "#EFEBEF",
      ],
      [
        "#FFFFFF",
        "#C8C8C8",
        "#969696",
        "#646464",
        "#323232",
        "#1E1E1E",
        "#1E1E1E",
        "#1E1E1E",
        "#1E1E1E",
      ],
      id
    );
  },
  dayNight: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Day Night",
      "#FFFFFF",
      "#212121",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#142138",
        "#3E5376",
        "#A5DCE9",
        "#EF8E46",
        "#FFCD86",
        "#FFF5D5",
        "#FFF5D5",
        "#FFF5D5",
        "#FFF5D5",
      ],
      [
        "#1E1E1E",
        "#3C3C3C",
        "#5A5A5A",
        "#787878",
        "#969696",
        "#B4B4B4",
        "#B4B4B4",
        "#B4B4B4",
        "#B4B4B4",
      ],
      id
    );
  },
  donuts: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Donuts",
      "#FFFFFF",
      "#212121",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#FF86A3",
        "#FF6386",
        "#FFDF91",
        "#FFBF7A",
        "#8CEEFF",
        "#20DAF5",
        "#EC9D75",
        "#CE6852",
        "#1B1B1C",
      ],
      [
        "#FFFFFF",
        "#AFAFAF",
        "#646464",
        "#393939",
        "#393939",
        "#393939",
        "#393939",
        "#393939",
        "#393939",
      ],
      id
    );
  },
  classic: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Classic",
      "#FFFFFF",
      "#212121",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#346188",
        "#517A9E",
        "#FF6A86",
        "#C2415F",
        "#1B1B1C",
        "#EFEBEF",
        "#EFEBEF",
        "#EFEBEF",
        "#EFEBEF",
      ],
      [
        "#FFF2E8",
        "#FFE8D7",
        "#FFDDC3",
        "#FFD2AF",
        "#FFC69B",
        "#646464",
        "#646464",
        "#646464",
        "#646464",
      ],
      id
    );
  },
  new: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "New",
      "#FFFFFF",
      "#212121",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#1395BA",
        "#0D3C55",
        "#C02E1D",
        "#F16C20",
        "#EBC844",
        "#A2B86C",
        "#1B1B1C",
        "#EFEBEF",
        "#EFEBEF",
      ],
      [
        "#C8C8C8",
        "#969696",
        "#646464",
        "#323232",
        "#1E1E1E",
        "#1E1E1E",
        "#1E1E1E",
        "#1E1E1E",
        "#1E1E1E",
      ],
      id
    );
  },
  dark: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Dark",
      "#030436",
      "#EFEBEF",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#20E4ED",
        "#71DF4F",
        "#F55A75",
        "#FEFEFE",
        "#1B1B1C",
        "#1B1B1C",
        "#1B1B1C",
        "#1B1B1C",
        "#1B1B1C",
      ],
      [
        "#030436",
        "#FFFFFF",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
        "#C8C8C8",
      ],
      id
    );
  },
  blackWhite: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "Black/White",
      "#111111",
      "#EFEBEF",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#FAFAFA",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
        "#FFFFFF",
      ],
      [
        "#222222",
        "#333333",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
      ],
      id
    );
  },
  whiteBlack: (name?: string, id?: string | number): Theme => {
    return new Theme(
      name || "White/Black",
      "#FAFAFA",
      "#212121",
      ["#F44336", "#2196F3", "#4CAF50", "#FF9800"],
      [
        "#222222",
        "#333333",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
      ],
      [
        "#FFFFFF",
        "#E5E5E5",
        "#CCCCCC",
        "#CCCCCC",
        "#CCCCCC",
        "#CCCCCC",
        "#CCCCCC",
        "#CCCCCC",
        "#CCCCCC",
      ],
      id
    );
  },
};

export default DefaultThemes;
