/**
 * @function getXNum
 * @description Gets the number value for the X coordinate (w, x, y, or z).
 * Created 5/11/24 by Alexander Burdiss
 * @param {string} str The x coordinate to be converted
 * @returns {number} The corresponding 1 based index of the piece
 * @author Alexander Burdiss
 * @since 5/11/24
 * @version 1.0.0
 * @example
 * const xNum = getXNum(this.x);
 */
export function getXNum(str: string): number {
  return { w: 1, x: 2, y: 3, z: 4 }[str] ?? -1;
}
