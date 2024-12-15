import useGame from "../../../hooks/useGame";
import useStoneStore from "../../../stores/useStoneStore";
import { StoneColor, StoneType } from "../../../types/stone";
import { BlackStone, StoneCount, StoneCountContainer, WhiteStone } from "./Stone.styles";

function StoneContainer({ color }: { color: StoneColor }) {
  const { handleStoneSelect } = useGame();
  const { whiteStones, blackStones } = useStoneStore();
  const stones = (color === 'white') ? whiteStones : blackStones;
  const Stone = (color === 'white') ? WhiteStone : BlackStone;
  const stoneTypes: StoneType[] = [1, 2, 3, 4, 5];

  return (
    <StoneCountContainer>
      {(stoneTypes).map(type =>
        <StoneCount key={type}>
          <Stone onClick={() => handleStoneSelect({ type, color })}>
            {type}
          </Stone>
          x {stones[type]}
        </StoneCount>
      )}
    </StoneCountContainer>
  )
}

export default StoneContainer;