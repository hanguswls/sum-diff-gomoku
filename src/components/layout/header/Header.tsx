import { BookOpen, RotateCcw } from "lucide-react";
import { ActionItemGroup, HeaderContainer, IconButton, StyledLink, Timer, TitleImg } from "./Header.styles";
import title from '/title.svg';
import useTimer from "../../../hooks/useTimer";
import useGame from "../../../hooks/useGame";

function Header() {
  const { displayTime } = useTimer();
  const { handleRetryButtonClick } = useGame();

  return (
    <HeaderContainer>
      <TitleImg src={title} alt="합차오목 타이틀" />
      <Timer>{ displayTime }</Timer>
      <ActionItemGroup>
        <IconButton onClick={handleRetryButtonClick}>
          <RotateCcw />
          다시하기
        </IconButton>
        <StyledLink to='/rule'>
          <BookOpen />
          게임규칙
        </StyledLink>
      </ActionItemGroup>
    </HeaderContainer>
  )
}

export default Header;