import useGame from "../../../hooks/useGame";
import useStoneStore from "../../../stores/useStoneStore";
import useTurnStore from "../../../stores/useTurnStore";
import { StoneColor, StoneType } from "../../../types/stone";
import { Stone, StoneCount, StoneCountContainer } from "./Stone.styles";

function StoneContainer({ color }: { color: StoneColor }) {
  const { handleStoneSelect } = useGame();
  const { whiteStones, blackStones } = useStoneStore();
  const { curTurn } = useTurnStore();
  const stones = (color === 'white') ? whiteStones : blackStones;
  const stoneTypes: StoneType[] = [1, 2, 3, 4, 5];
  const isMyTurn: boolean = color === curTurn;

  return (
    <StoneCountContainer $isMyTurn={isMyTurn}>
      {(stoneTypes).map(type =>
        stones[type] > 0 &&
          <StoneCount key={type}>
            <Stone
              $stoneColor={color}
              onClick={() => handleStoneSelect({ type, color })}
            >
              {type}
            </Stone>
            x {stones[type]}
          </StoneCount>
      )}
    </StoneCountContainer>
  )
}

export default StoneContainer;