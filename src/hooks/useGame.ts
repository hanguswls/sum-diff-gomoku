import { BOARD_LENGTH } from "../constants/game";

function useGame() {
  const board = Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null));
  return {
    board,
  }
}

export default useGame;