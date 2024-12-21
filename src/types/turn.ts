import { StoneColor } from "./stone";

export interface TurnState {
  curTurn: StoneColor;
  switchTurn: () => void;
  resetCount: number;

  isFirstTurn: boolean;
  finishFirstTurn: () => void;

  reset: () => void;
}