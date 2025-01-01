import styled from "styled-components";

export const AdWrapper = styled.div<{ $adUnitIdx: number }>`
  display: ${({ $adUnitIdx }) => ($adUnitIdx === 2 ? 'none' : 'block')};

  @media (max-width: 768px) {
    display: ${({ $adUnitIdx }) => ($adUnitIdx === 2 ? 'block' : 'none')};
  }
`;