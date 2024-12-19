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
`;

export const Timer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: #E7E5E4;
`;

export const ActionItemGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 16px;
`;

const headerItemStyles = css`
  font-size: 16px;
  display: flex;
  align-items: center;
  background-color: #E7E5E4;
  color: #57534E;
  border: none;
  border-radius: 12px;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  z-index: 1;

  svg {
    width: 20px;
  }
`;

export const IconButton = styled.button`
 ${headerItemStyles}
`;

export const StyledLink = styled(Link)`
  ${headerItemStyles};
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;