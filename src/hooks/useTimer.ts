import { useEffect, useState } from "react";
import useTurnStore from "../stores/useTurnStore";
import { TURN_TIME_LIMIT } from "../constants/game";
import { useLocation } from "react-router-dom";

function useTimer() {
  const { curTurn, switchTurn } = useTurnStore();
  const [timer, setTimer] = useState(TURN_TIME_LIMIT);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return;

    setTimer(TURN_TIME_LIMIT);

    const interval = setInterval(() => {
      setTimer(time => {
        if (time <= 0) {
          clearInterval(interval);
          alert('제한시간 1분이 지나 턴이 바뀝니다.');
          switchTurn();
          return TURN_TIME_LIMIT;
        }
        return time - 1;
      })
    }, 1000);

    return () => clearInterval(interval);
  }, [curTurn])

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return {
    displayTime
  }
}

export default useTimer;