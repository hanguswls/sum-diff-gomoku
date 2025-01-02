import styled from "styled-components";

export const AdWrapper = styled.div<{ $adUnitIdx: number }>`
  @media (max-width: 768px) {
    display: none;
  }
`;