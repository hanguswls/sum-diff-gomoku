import { useEffect, useState } from "react";
import useTurnStore from "../stores/useTurnStore";
import { TURN_TIME_LIMIT } from "../constants/game";
import { useLocation } from "react-router-dom";
import useStartGameModal from "./useStartGameModal";
import useToastStore from "../stores/useToastStore";

function useTimer() {
  const { curTurn, switchTurn, resetCount } = useTurnStore();
  const [timer, setTimer] = useState(TURN_TIME_LIMIT);
  const { pathname } = useLocation();
  const { isModalOpen } = useStartGameModal();
  const { setMessage: setToastMessage, setIsVisible: setIsToastVisible } = useToastStore();

  useEffect(() => {
    if (pathname !== '/') return;
    if (isModalOpen) return;

    setTimer(TURN_TIME_LIMIT);

    const interval = setInterval(() => {
      setTimer(time => {
        if (time <= 0) {
          setTimeout(() => {
            setToastMessage(`제한시간 ${TURN_TIME_LIMIT}초가 지나 턴이 바뀝니다.`);
            setIsToastVisible(true);
            switchTurn();
          }, 0);
          return TURN_TIME_LIMIT;
        }
        return time - 1;
      })
    }, 1000);

    return () => clearInterval(interval);
  }, [curTurn, resetCount, isModalOpen])

  return {
    timer
  }
}

export default useTimer;