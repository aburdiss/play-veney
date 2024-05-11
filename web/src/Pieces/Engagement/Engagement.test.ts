import { describe, expect, test } from 'vitest';
import Engagement from './Engagement';
import { COLORS } from '../../enums/colors';

describe('Engagement functions correctly', () => {
  describe('white', () => {
    test('engagement in first measure can only move forward one', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 1);
      expect(possibleMoves).toEqual(['w2']);
    });
    test('engagement in third measure can only move forward one', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 9);
      expect(possibleMoves).toEqual(['w10']);
    });
    test('engagement in fourth measure can only move forward one', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 13);
      expect(possibleMoves).toEqual(['w14']);
    });
    test('engagement at end of the board cannot move', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 16);
      expect(possibleMoves).toEqual([]);
    });
    test('engagement in row 5 can move to center line', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 5);
      expect(possibleMoves).toEqual(['w6', 'w7', 'w8']);
    });
    test('engagement in row 6 can move to center line', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 6);
      expect(possibleMoves).toEqual(['w7', 'w8']);
    });
    test('engagement in row 7 can move to center line', () => {
      const eng = new Engagement(COLORS.White);
      const possibleMoves = eng.getPossibleMoves('w', 7);
      expect(possibleMoves).toEqual(['w8']);
    });
  });
});
