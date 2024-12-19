import { Stone } from "./stone";

export interface BoardState {
  board: (Stone | null)[][],
  placeStoneAt: (row: number, col: number, stone: Stone) => void,

  reset: () => void,
}