import { COLORS } from '../../enums/colors';
import { PIECES } from '../../enums/pieces';
import Piece from '../Piece';

export default class Self extends Piece {
  constructor(color: COLORS) {
    super(PIECES.Self, color);
  }

  getPossibleMoves(x: string, y: number): Array<string> {
    switch (this.color) {
      case COLORS.White:
      // handle lunging
      case COLORS.Black:
        // handle lunging
        return [];
    }
  }
}
