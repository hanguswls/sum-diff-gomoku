import { useState } from "react";
import { BOARD_LENGTH, MAX_FIRST_TURN_STONE_TYPE, WINNING_SCORE } from "../constants/game";
import { Stone, StoneColor } from "../types/stone";
import useStoneStore from "../stores/useStoneStore";
import useTurnStore from "../stores/useTurnStore";

function useGame() {
  const { setSelectedStone, reset: resetStoneStore } = useStoneStore();
  const { curTurn, isFirstTurns, reset: resetTurnStore } = useTurnStore();
  const [board, setBoard] = useState<(Stone | null)[][]>(Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null)));
  const [winner, setWinner] = useState<StoneColor | null>(null);

  const reset = () => {
    resetStoneStore();
    resetTurnStore();
    setWinner(null);
    setBoard(Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null)));
  }

  const handleStoneSelect = ({ color, type }: Stone) => {
    if (color !== curTurn) {
      curTurn === 'white'
      ? alert('백돌 차례입니다.')
      : alert('흑돌 차례입니다.');
      return;
    }
    if (isFirstTurns[color] && type > MAX_FIRST_TURN_STONE_TYPE) {
      alert(`첫 수에는 ${MAX_FIRST_TURN_STONE_TYPE} 이하의 돌만 놓을 수 있습니다`);
      return;
    }
    setSelectedStone({color, type});
  };

  /** Checks if the given row and column are within the board boundaries. */
  const isInBoard = (row: number, col: number): boolean => {
    return row >= 0 && row < BOARD_LENGTH && col >= 0 && col < BOARD_LENGTH;
  }

  const isGameOver = (row: number, col: number) : boolean => {
    let whiteSum = 0, blackSum = 0;
    const DIRECTIONS: [number, number][] = [
      [0, 1], // vertical
      [1, 0], // horizontal
      [1, 1], // main-diagonal
      [-1, 1] // anti-diagonal
    ];

    const updateSum = (pos: Stone) => {
      if (pos.color === 'white') whiteSum += pos.type;
      else blackSum += pos.type;
    }

    const scanDirection = (startRow: number, startCol: number, dy: number, dx: number) => {
      let nextRow = startRow + dy;
      let nextCol = startCol + dx;

      while(isInBoard(nextRow, nextCol) && board[nextRow][nextCol]) {
        updateSum(board[nextRow][nextCol] as Stone);
        nextRow += dy;
        nextCol += dx;
      }
    };

    return DIRECTIONS.some(([dx, dy]: [number, number]) => {
      whiteSum = 0, blackSum = 0;

      if (!board[row][col]) return false;
      updateSum(board[row][col]);

      scanDirection(row, col, dy, dx);    // positive direction
      scanDirection(row, col, -dy, -dx);  // negative direction

      if (whiteSum - blackSum === WINNING_SCORE) {
        setWinner('white');
        return true;
      }
      if (blackSum - whiteSum === WINNING_SCORE) {
        setWinner('black');
        return true;
      }
      return false;
    })
  }

  return {
    board,
    handleStoneSelect,
  }
}

export default useGame;