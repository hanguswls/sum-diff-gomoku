// styles/Stone.styles.js
import styled from "styled-components";

const Stone = styled.div`
  align-content: center;
  border-radius: 50%;
  z-index: 1;
  aspect-ratio: 1 / 1;
  width: 40px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 33px;
  }

  @media (max-width: 768px) {
    width: 27px;
  }
`;

export const WhiteStone = styled(Stone)`
  color: var(--soft-black);
  background-color: #fff;
  box-shadow: inset -3px -3px 8px 3px rgba(0,0,0,0.15);
`;

export const BlackStone = styled(Stone)`
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
    z-index: 1;
  }
`;

export const StoneCount = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: 700;
`;

export const StoneCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;