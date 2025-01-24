import { useState, useEffect } from "react";
import { BOARD_LENGTH, MAX_FIRST_TURN_STONE_TYPE, WINNING_SCORE } from "../constants/game";
import { Stone, StoneColor } from "../types/stone";
import useStoneStore from "../stores/useStoneStore";
import useTurnStore from "../stores/useTurnStore";
import useBoardStore from "../stores/useBoardStore";
import useStartGameModal from "./useStartGameModal";
import useToastStore from "../stores/useToastStore";

function useGame() {
  const { selectedStone, setSelectedStone, decrementStone, reset: resetStoneStore } = useStoneStore();
  const { curTurn, switchTurn, isFirstTurn, finishFirstTurn, reset: resetTurnStore, setGameOver } = useTurnStore();
  const { board, placeStoneAt, reset: resetBoardStore } = useBoardStore();
  const { openModal } = useStartGameModal();
  const [winner, setWinner] = useState<StoneColor | null>(null);
  const [winningPositions, setWinningPositions] = useState<[Number, Number][]>([]);
  const { setMessage: setToastMessage, setIsVisible: setIsToastVisible } = useToastStore();

  useEffect(() => {
    if (!winner) return;

    winner === 'white'
    ? setToastMessage('백돌이 이겼습니다!')
    : setToastMessage('흑돌이 이겼습니다.');
    setIsToastVisible(true);
    setGameOver();
  }, [winner])

  const reset = () => {
    resetStoneStore();
    resetTurnStore();
    resetBoardStore();
    setWinner(null);
    setWinningPositions([]);
    openModal();
  }

  const handleStoneSelect = ({ color, type }: Stone) => {
    if (color !== curTurn) {
      curTurn === 'white'
      ? setToastMessage('백돌 차례입니다.')
      : setToastMessage('흑돌 차례입니다.');
      setIsToastVisible(true);
      return;
    }
    if (isFirstTurn && type > MAX_FIRST_TURN_STONE_TYPE) {
      setToastMessage(`첫 수에는 ${MAX_FIRST_TURN_STONE_TYPE} 이하의 돌만 놓을 수 있습니다`);
      setIsToastVisible(true);
      return;
    }
    setSelectedStone({color, type});
  };

  /** Checks if the given row and column are within the board boundaries. */
  const isInBoard = (row: number, col: number): boolean => {
    return row >= 0 && row < BOARD_LENGTH && col >= 0 && col < BOARD_LENGTH;
  }

  const isGameOver = (row: number, col: number, stone: Stone) : boolean => {
    let whiteSum = 0, blackSum = 0;
    const positions: [number, number][] = [];
    const DIRECTIONS: [number, number][] = [
      [0, 1], // vertical
      [1, 0], // horizontal
      [1, 1], // main-diagonal
      [-1, 1] // anti-diagonal
    ];

    const updateSum = (pos: Stone, r: number, c: number) => {
      positions.push([r, c]);
      if (pos.color === 'white') whiteSum += pos.type;
      else blackSum += pos.type;
    }

    const scanDirection = (startRow: number, startCol: number, dy: number, dx: number) => {
      let nextRow = startRow + dy;
      let nextCol = startCol + dx;

      while(isInBoard(nextRow, nextCol) && board[nextRow][nextCol]) {
        updateSum(board[nextRow][nextCol] as Stone, nextRow, nextCol);
        nextRow += dy;
        nextCol += dx;
      }
    };

    return DIRECTIONS.some(([dx, dy]: [number, number]) => {
      whiteSum = 0, blackSum = 0;
      positions.length = 0; // clear previous positions
      updateSum(stone, row, col);

      scanDirection(row, col, dy, dx);    // positive direction
      scanDirection(row, col, -dy, -dx);  // negative direction

      if (whiteSum - blackSum === WINNING_SCORE) {
        setWinner('white');
        setWinningPositions([...positions]);
        return true;
      }
      if (blackSum - whiteSum === WINNING_SCORE) {
        setWinner('black');
        setWinningPositions([...positions]);
        return true;
      }
      return false;
    })
  }

  const playStone = (row: number, col: number, stone: Stone) => {
    if (!isInBoard(row, col)) return;
    if (board[row][col]) {
      setToastMessage('이미 돌이 놓여진 자리입니다.');
      setIsToastVisible(true);
      return;
    }
    decrementStone(stone);

    placeStoneAt(row, col, stone);

    if (isGameOver(row, col, stone)) return;

    if (isFirstTurn) finishFirstTurn();
    switchTurn();
  }

  const handleIntersectionClick = (row: number, col: number) => {
    if (!selectedStone) return;
    playStone(row, col, selectedStone);
    setSelectedStone(null);
  }

  const handleRetryButtonClick = () => reset();

  return {
    board,
    winningPositions,
    handleStoneSelect,
    handleIntersectionClick,
    handleRetryButtonClick
  }
}

export default useGame;