import { StoneColor } from "./stone";

export interface TurnState {
  curTurn: StoneColor;
  switchTurn: () => void;

  isFirstTurn: boolean;
  finishFirstTurn: () => void;

  reset: () => void;
}