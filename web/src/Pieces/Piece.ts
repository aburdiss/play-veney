import { COLORS } from '../enums/colors';
import { PIECES } from '../enums/pieces';

export default class Piece {
  name: PIECES;
  color: COLORS;

  constructor(name: PIECES, color: COLORS) {
    this.name = name;
    this.color = color;
  }
}
