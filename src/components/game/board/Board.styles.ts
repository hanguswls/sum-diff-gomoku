import styled from "styled-components";
import { BOARD_LENGTH } from "../../../constants/game";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${BOARD_LENGTH}, 1fr);
  grid-template-rows: repeat(${BOARD_LENGTH}, 1fr);
  background-color: #E5C29F; // 전통적인 바둑판 베이지 색상
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1 / 1;
  width: 560px;
  padding: ${560 / BOARD_LENGTH / 2}px;

  @media (max-width: 1024px) {
    width: 540px;
    padding: ${540 / BOARD_LENGTH / 2}px;
  }

  @media (max-width: 768px) {
    width: 450px;
    padding: ${450 / BOARD_LENGTH / 2}px;
  }
`;

export const Intersection = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  transition: 0.2s 0.2s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    background-color: rgba(255, 0, 0, 0.4);
  }
`;

export const HorizontalLine = styled.div`
  position: absolute;
  background-color: #947464;
  top: 50%;
  left: -50%; // 라인이 교차점을 완전히 관통하도록
  width: 200%;
  height: 1px;
  transform: translateY(-50%);
`;

export const VerticalLine = styled.div`
  position: absolute;
  background-color: #947464;
  top: -50%; // 라인이 교차점을 완전히 관통하도록
  left: 50%;
  width: 1px;
  height: 200%;
  transform: translateX(-50%);
`;