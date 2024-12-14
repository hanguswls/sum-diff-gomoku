import Board from "../../game/board/Board";
import StoneContainer from "../../game/stone/StoneContainer";
import { MainContainer } from "./Main.styles";

function Main() {

  return (
    <MainContainer>
      <StoneContainer color='black' />
      <Board />
      <StoneContainer color='white' />
    </MainContainer>
  )
}

export default Main;