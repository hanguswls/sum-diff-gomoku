import { create } from "zustand"
import { BoardState } from "../types/board"
import { BOARD_LENGTH } from "../constants/game"

const useBoardStore = create<BoardState>()((set) => ({
  board: Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null)),
  placeStoneAt: (row, col, stone) => set((state) => {
    const newBoard = state.board.map(row => [...row]);
    newBoard[row][col] = stone;
    return { board: newBoard };
  }),

  reset: () => set({
    board: Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null))
  }),
}))

export default useBoardStore;