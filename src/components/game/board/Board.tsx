import React from "react";
import useGame from "../../../hooks/useGame";
import { BoardContainer, HorizontalLine, Intersection, VerticalLine } from "./Board.styles";

function Board() {
  const { board } = useGame();

  return (
    <BoardContainer>
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
    </BoardContainer>
  )
}

export default Board;