import { Link } from "react-router-dom";
import { Copyright, FooterContainer, NavLinks, Spacer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <NavLinks>
        <Link to='/terms'>이용약관</Link>
        <span>|</span>
        <Link to='/privacy'>개인정보처리방침</Link>
      </NavLinks>
      <Copyright>
        © 2024.
        <a
          href="https://github.com/hanguswls"
          target="_blank"
          rel="noopener noreferrer"
        > hanguswls</a>
      </Copyright>
      <Spacer />
    </FooterContainer>
  )
}

export default Footer;