import { getXNum } from '../../utils/getXNum';
import Piece from '../Piece';

export default class Board {
  reserve = [];
  board = this.buildBoard();

  constructor() {}

  getBoardState(): Array<Array<null | Array<Piece>>> {
    return this.board;
  }

  insert(piece: Piece, x: string, y: number): void {
    const xNum = getXNum(x);
    const cell = this.board[xNum - 1][y - 1];
    if (cell) {
      cell.push(piece);
    }
    this.board[xNum - 1][y - 1] = [piece];
  }

  remove(piece: Piece, x: string, y: number) {
    const xNum = getXNum(x);
    const cell = this.board[xNum - 1][y - 1];
    if (cell) {
      const filteredCell = cell.filter((element) => {
        return element.name !== piece.name;
      });
      if (filteredCell.length === 0) {
        this.board[xNum - 1][y - 1] = null;
      } else {
        this.board[xNum - 1][y - 1] = filteredCell;
      }
    }
  }

  move(piece: Piece, origX: string, origY: number, newX: string, newY: number) {
    this.remove(piece, origX, origY);
    this.insert(piece, newX, newY);
  }

  buildBoard(): Array<Array<null | Array<Piece>>> {
    let row = 0;
    const board = [];
    while (row < 4) {
      let col = 0;
      const squares = [];
      while (col < 16) {
        squares.push(null);
        col++;
      }
      board.push(squares);
      row++;
    }
    return board;
  }
}
