import Board from "../../game/board/Board";
import MouseFollowingStone from "../../game/stone/MouseFollowingStone";
import StoneContainer from "../../game/stone/StoneContainer";
import { MainContainer } from "./Main.styles";

function Main() {

  return (
    <MainContainer>
      <StoneContainer color='black' />
      <Board />
      <StoneContainer color='white' />
      <MouseFollowingStone />
    </MainContainer>
  )
}

export default Main;