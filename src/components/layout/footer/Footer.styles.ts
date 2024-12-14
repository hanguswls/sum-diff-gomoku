import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  background-color: #F5F5F4;
  padding: 16px;
  color: #57534E;
  font-size: 12px;

  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const NavLinks = styled.nav`
  flex: 1;
  display: flex;
  gap:6px;
`;

export const Copyright = styled.span`
  flex: 1;
`;

export const Spacer = styled.div`
  flex: 1;
`;