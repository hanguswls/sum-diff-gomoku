import React from "react";
import useGame from "../../../hooks/useGame";
import { BoardContainer, HorizontalLine, Intersection, VerticalLine } from "./Board.styles";
import { BoardStone } from "../stone/Stone.styles";

function Board() {
  const { board, winningPositions, handleIntersectionClick } = useGame();

  const isWinningPosition = (row: number, col: number) =>
    winningPositions.some(([r, c]) => r === row && c === col);

  return (
    <BoardContainer>
      {board.map((row, rowIdx) =>
        <React.Fragment key={rowIdx}>
          {row.map((cell, colIdx) =>
            <Intersection
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleIntersectionClick(rowIdx, colIdx)}
            >
              <VerticalLine />
              <HorizontalLine />
              {cell &&
                <BoardStone
                  $stoneColor={cell.color}
                  $isWinningPosition={isWinningPosition(rowIdx, colIdx)}
                >
                  { cell.type }
                </BoardStone>
              }
            </Intersection>
          )}
        </React.Fragment>
      )}
    </BoardContainer>
  )
}

export default Board;