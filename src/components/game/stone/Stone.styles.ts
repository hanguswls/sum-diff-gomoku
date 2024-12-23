// styles/Stone.styles.js
import styled, { css } from "styled-components";
import { StoneColor } from "../../../types/stone";

const stoneVariants = {
  white: css`
    color: var(--soft-black);
    background-color: #fff;
    box-shadow: inset -3px -3px 8px 3px rgba(0,0,0,0.15);
  `,
  black: css`
    color: white;
    position: relative;
    background: linear-gradient(
      to bottom,
      #666666 0%,
      #4A4A4A 40%,
      #1A1A1A 70%,
      #000000 100%
  );

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 10%;
    left: 10%;
    background-color: rgba(255, 255, 255, 0.7);
    filter: blur(16px);
    z-index: 11;
  }
  `
}

const baseStoneStyle = css`
  align-content: center;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  user-select: none;
`;

export const Stone = styled.div<{ color: StoneColor}>`
  ${baseStoneStyle};
  width: 35px;
  font-weight: 700;

  ${({ color }) => stoneVariants[color]}

  @media (max-width: 1024px) {
    width: 34px;
  }

  @media (max-width: 768px) {
    width: 27px;
  }
`;

export const BoardStone = styled(Stone)`
  position: absolute;
  z-index: 10;
`;

export const StoneCount = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 700;
  user-select: none;
`;

export const StoneCountContainer = styled.div<{ $isMyTurn: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  border-radius: 16px;

  background-color: ${({ $isMyTurn }) => $isMyTurn && 'rgba(255, 154, 139, 0.5)'};
`;

export const SelectableStone = styled.button<{ color: StoneColor }>`
  ${baseStoneStyle};
  ${({ color }) => stoneVariants[color]}

  width: 40px;
  position: relative;
  border: none;
  transition: transform 0.2 ease;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 5px solid transparent;
    transition: border-color 0.2 ease;
    transform: scale(1);
  }

  &:hover {
    transform: scale(1.1);
  }

  &:focus::before,
  &:active::before {
    border-color: #FF9A8B;
  }

  &::after {
    width: 24px;
    filter: blur(24px);
  }
`;