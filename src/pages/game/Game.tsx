import AdBanner from "../../components/ad/AdBanner";
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
        <AdBanner adUnitIdx={0} /> {/*vertical banner ad for PC screen */}
        <StoneContainer color='black' />
        <Board />
        <StoneContainer color='white' />
        <MouseFollowingStone />
        <AdBanner adUnitIdx={1} /> {/*vertical banner ad for PC screen */}
      </GameContainer>
      <AdBanner adUnitIdx={2} /> {/*landscape banner ad for tablet screen */}
    </>
  )
}

export default Game;