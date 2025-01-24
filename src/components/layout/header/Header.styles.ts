import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--soft-black);
  padding: 16px 32px;
  position: relative;
`;

export const TitleImg = styled.img`
  height: 32px;
  cursor: pointer;
  z-index: 1;
`;

export const Timer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: #E7E5E4;
  user-select: none;
`;

export const ActionItemGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

const headerItemStyles = css`
  font-size: 12px;
  display: flex;
  align-items: center;
  background-color: #E7E5E4;
  color: #57534E;
  border: none;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  z-index: 1;

  svg {
    height: 16px;
  }

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IconButton = styled.button`
 ${headerItemStyles}
`;

export const StyledLink = styled(Link)`
  ${headerItemStyles};
  text-decoration: none;
`;