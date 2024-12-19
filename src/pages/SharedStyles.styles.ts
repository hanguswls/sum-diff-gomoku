import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 100px 300px;
  flex-direction: column;
  gap: 48px;
  color: var(--soft-black);
  text-align: left;

  @media (max-width: 1024px) {
    padding: 60px 90px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
`;

export const VideoGuide = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  text-decoration: none;
  color: #57534E;
  font-size: 16px;

  img {
    width: 24px;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    align-self: center;
    width: 70%;
  }
`;

export const SubTitle = styled.h3`
  font-size: 24px;
`;

export const List = styled.ul`
  padding-left: 32px;
`;

export const Item = styled.li`
  font-size: 16px;
  padding-bottom: 8px;
`;

export const Bold = styled.span`
  font-weight: 600;
`;