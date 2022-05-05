export class ThemeParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ThemeParseError";
  }
}
