import Board from "../../components/game/board/Board";
import MouseFollowingStone from "../../components/game/stone/MouseFollowingStone";
import StoneContainer from "../../components/game/stone/StoneContainer";
import StartGameModal from "../../components/modal/StartGameModal";
import { GameContainer } from "./Game.styles";

function Game() {
  return (
    <>
      <StartGameModal />
      <GameContainer>
        <StoneContainer color='black' />
        <Board />
        <StoneContainer color='white' />
        <MouseFollowingStone />
      </GameContainer>
    </>
  )
}

export default Game;