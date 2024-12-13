import React from "react";
import useGame from "../../hooks/useGame";
import { Board, HorizontalLine, Intersection, VerticalLine,  } from "./Game.styles";

function Game() {
  const { board } = useGame();

  return (
    <Board>
      {board.map((row, rowIdx) =>
        <React.Fragment key={rowIdx}>
          {row.map((_, colIdx) =>
            <Intersection key={`${rowIdx}-${colIdx}`}>
              <VerticalLine />
              <HorizontalLine />
            </Intersection>
          )}
        </React.Fragment>
      )}
    </Board>
  )
}

export default Game;