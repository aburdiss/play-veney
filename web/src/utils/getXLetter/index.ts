/**
 * @function getXLetter
 * @description Gets the letter value for the X coordinate number (returns w,
 * x, y, or z).
 * Created 5/11/24 by Alexander Burdiss
 * @param {number} num The x value to be converted
 * @returns {string} The corresponding coordinate letter of the piece
 * @author Alexander Burdiss
 * @since 5/18/24
 * @version 1.0.0
 * @example
 * const xLetter = getXLetter(4);
 */
export function getXLetter(num: number): string {
  return { 1: 'w', 2: 'x', 3: 'y', 4: 'z' }[num] ?? '';
}
