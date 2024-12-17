import { StoneColor } from "./stone";

export interface TurnState {
  curTurn: StoneColor;
  switchTurn: () => void;

  isFirstTurns: {
    [key in StoneColor]: boolean;
  }
  finishFirstTurns: (color: StoneColor) => void;
}