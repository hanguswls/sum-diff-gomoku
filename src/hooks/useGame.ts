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

  return {
    board,
    handleStoneSelect,
  }
}

export default useGame;