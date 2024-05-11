import { describe, test, expect } from 'vitest';
import Board from './Board';
import Engagement from '../Engagement/Engagement';
import { COLORS } from '../../enums/colors';
import { PIECES } from '../../enums/pieces';

describe('board functions correctly', () => {
  test('starts with empty board', () => {
    const board = new Board();
    const state = board.getBoardState();
    expect(state).toEqual(board.buildBoard());
  });

  test('inserts engagement at correct location', () => {
    const board = new Board();
    const eng = new Engagement(COLORS.White);
    board.insert(eng, 'w', 1);
    const state = board.getBoardState();
    expect(state[0][0]?.[0]?.name).toEqual(PIECES.Engagement);
  });

  test('removes engagement from correct location', () => {
    const board = new Board();
    const eng = new Engagement(COLORS.White);
    board.insert(eng, 'z', 16);
    board.remove(eng, 'z', 16);
    const state = board.getBoardState();
    expect(state).toEqual(board.buildBoard());
  });
});
