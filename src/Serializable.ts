/**
 * An object that is convertible to JSON.
 */
export interface Serializable {
  /**
   * Converts this object into JSON.
   * @returns JSON object
   */
  toJson(): object;

  /**
   * Converts this object into JSON string.
   * @returns JSON string
   */
  toString(): string;
}
