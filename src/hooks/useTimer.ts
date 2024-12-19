import { useEffect, useState } from "react";
import useTurnStore from "../stores/useTurnStore";

function useTimer() {
  const { curTurn, switchTurn } = useTurnStore();
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    setTimer(180);

    const interval = setInterval(() => {
      setTimer(time => {
        if (time <= 0) {
          clearInterval(interval);
          alert('제한시간 3분이 지나 턴이 바뀝니다.');
          switchTurn();
          return 180;
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