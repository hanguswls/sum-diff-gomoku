import { useState } from "react";
import { BOARD_LENGTH } from "../constants/game";
import { Stone, StoneColor } from "../types/stone";
import useStoneStore from "../stores/useStoneStore";
import useTurnStore from "../stores/useTurnStore";

function useGame() {
  const { setSelectedStone, reset: resetStoneStore } = useStoneStore();
  const { curTurn, reset: resetTurnStore } = useTurnStore();
  const [board, setBoard] = useState<(Stone | null)[][]>(Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null)));
  const [winner, setWinner] = useState<StoneColor | null>(null);

  const reset = () => {
    resetStoneStore();
    resetTurnStore();
    setWinner(null);
    setBoard(Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null)));
  }

  const handleStoneSelect = ({color, type}: Stone) => {
    if (color !== curTurn) {
      alert(`${curTurn} 차례입니다.`);
      return;
    }
    setSelectedStone({color, type});
    console.log(color);
  }

  return {
    board,
    handleStoneSelect,
  }
}

export default useGame;