import Piece from '../Piece';
import { PIECES } from '../../enums/pieces';
import { COLORS } from '../../enums/colors';

export default class Engagement extends Piece {
  constructor(color: COLORS) {
    super(PIECES.Engagement, color);
  }
  /**
   * @todo Get possible captures on the diagonals
   */
  getPossibleMoves(x: string, y: number): Array<string> {
    switch (this.color) {
      case COLORS.White:
        if (y == 16) {
          return [];
        }
        // If in the second measure, handle this differently
        if (y >= 5 && y < 8) {
          let i = y;
          const possibleMoves = [];
          while (i < 8) {
            possibleMoves.push(x + String(i + 1));
            i++;
          }
          return possibleMoves;
        }
        return [x + String(y + 1)];
      case COLORS.Black:
        if (y === 1) {
          return [];
        }
        if (y > 9 && y <= 12) {
          let i = y;
          const possibleMoves = [];
          while (i > 9) {
            possibleMoves.push(x + String(i - 1));
            i--;
          }
          return possibleMoves;
        }
        // If in the third measure, handle this differently
        return [x + String(y - 1)];
    }
  }
}
