import { StoneColor, StoneCount, StoneType } from "../types/stone";

export const BOARD_LENGTH = 15;

const INITIAL_STONE_COUNT = 4;

export const INITIAL_STONES: StoneCount = {
  1: INITIAL_STONE_COUNT,
  2: INITIAL_STONE_COUNT,
  3: INITIAL_STONE_COUNT,
  4: INITIAL_STONE_COUNT,
  5: INITIAL_STONE_COUNT,
} as const;

export const FIRST_TURN: StoneColor = 'white';
export const MAX_FIRST_TURN_STONE_TYPE: StoneType = 3;

export const WINNING_SCORE = 16;