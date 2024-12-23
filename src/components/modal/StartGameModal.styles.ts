import { Link } from "react-router-dom";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  padding: 64px;
  gap: 48px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  user-select: none;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const baseButtonStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E7E5E4;
  color: #57534E;
  border: none;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Button = styled.button`
  ${baseButtonStyle};
`;

export const StyledLink = styled(Link)`
  ${baseButtonStyle};
  text-decoration: none;
`;