import { useState } from "react";
import { BOARD_LENGTH } from "../constants/game";
import { Stone, StoneColor, StoneType } from "../types/stone";
import useStoneStore from "../stores/useStoneStore";

function useGame() {
  const { setSelectedStone } = useStoneStore();
  const [board, setBoard] = useState<(Stone | null)[][]>(
  Array.from({ length: BOARD_LENGTH }, () => Array(BOARD_LENGTH).fill(null)));

  const [curTurn, setCurTurn] = useState<StoneColor>('white');


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