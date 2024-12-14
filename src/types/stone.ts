export type StoneType = 1 | 2 | 3 | 4 | 5;

export type StoneColor = 'black' | 'white';

export type StoneCount = {
  [key in StoneType]: number;
};

export interface StoneState {
  whiteStones: StoneCount;
  blackStones: StoneCount;
  decrementStone: (color: StoneColor, type: StoneType) => void
}