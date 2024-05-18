import { COLORS } from '../../enums/colors';
import { PIECES } from '../../enums/pieces';
import { getXNum } from '../../utils/getXNum';
import Piece from '../Piece';

export default class Self extends Piece {
  constructor(color: COLORS) {
    super(PIECES.Self, color);
  }

  getPossibleMoves(x: string, y: number): Array<string> {
    const xNum = getXNum(x);
    const possibleMoves = [];
    if (y < 15) {
      const forward = x + String(y + 1);
      possibleMoves.push(forward);
    }
    if (y > 0) {
      const backward = x + String(y - 1);
      possibleMoves.push(backward);
    }
    if (xNum > 1) {
      const left = String(xNum - 1) + y;
      possibleMoves.push(left);
    }
    if (xNum < 4) {
      const right = String(xNum + 1) + y;
      possibleMoves.push(right);
    }
    switch (this.color) {
      case COLORS.White:
      // handle lunging
      case COLORS.Black:
        // handle lunging
        return [];
    }
  }
}
