export type StoneType = 1 | 2 | 3 | 4 | 5;

export type StoneColor = 'black' | 'white';

export type StoneCount = {
  [key in StoneType]: number;
};

export interface StoneState {
  selectedStone: Stone | null;
  setSelectedStone: (stone: Stone | null) => void;

  whiteStones: StoneCount;
  blackStones: StoneCount;
  decrementStone: (color: StoneColor, type: StoneType) => void
}

export interface Stone {
  color: StoneColor;
  type: StoneType;
}