import useStoneStore from "../../../stores/useStoneStore";
import { StoneColor } from "../../../types/stone";
import { BlackStone, StoneCount, StoneCountContainer, WhiteStone } from "./Stone.styles";

function StoneContainer({ color }: { color: StoneColor }) {
  const { whiteStones, blackStones } = useStoneStore();
  const stones = (color === 'white') ? whiteStones : blackStones;
  const Stone = (color === 'white') ? WhiteStone : BlackStone;

  return (
    <StoneCountContainer>
      {(Object.entries(stones)).map(([type, count]) =>
        <StoneCount>
          <Stone key={type}>{type}</Stone>
          x {count}
        </StoneCount>
      )}
    </StoneCountContainer>
  )
}

export default StoneContainer;