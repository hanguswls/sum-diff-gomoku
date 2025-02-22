import { BookOpen, RotateCcw } from "lucide-react";
import { ActionItemGroup, HeaderContainer, IconButton, StyledLink, Timer, TitleImg } from "./Header.styles";
import title from '/title.svg';
import useTimer from "../../../hooks/useTimer";
import useGame from "../../../hooks/useGame";
import { useLocation, useNavigate } from "react-router-dom";
import useTurnStore from "../../../stores/useTurnStore";

function Header() {
  const { isGameOver } = useTurnStore();
  const { timer } = useTimer();
  const { pathname } = useLocation();
  const { handleRetryButtonClick } = useGame();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <TitleImg
        src={title}
        alt="합차오목 타이틀"
        onClick={() => navigate('/')}
      />
      {pathname === '/' &&
        <>
          {!isGameOver &&
            <Timer>{ timer }</Timer>
          }
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
        </>
      }
    </HeaderContainer>
  )
}

export default Header;