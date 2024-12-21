import { Container, Content, Contents, Header, Item, List, SubTitle, Title } from "../SharedStyles.styles";

function PrivacyPolicy() {
  return (
    <Container>
      <Header>
        <Title>개인정보처리방침</Title>
      </Header>
      <Contents>
        <Content>
          <SubTitle>1. 개인정보 수집 및 이용</SubTitle>
          <List>
            <Item>본 웹사이트는 어떠한 개인정보도 수집하지 않습니다.</Item>
            <Item>회원가입, 로그인 기능을 제공하지 않으며, 쿠키나 로컬 스토리지를 사용하지 않습니다.</Item>
            <Item>사용자 데이터를 저장하거나 기록하는 서버 기능이 없습니다.</Item>
          </List>
        </Content>
        <Content>
          <SubTitle>2. 개발자 정보</SubTitle>
          <List>
            <Item>
              GitHub:{" "}
              <a href="https://github.com/hanguswls/sumDiffOmok" target="_blank" rel="noopener noreferrer">https://github.com/hanguswls/sumDiffOmok</a>
            </Item>
          </List>
        </Content>
        <Content>
          <SubTitle>3. 개인정보 관련 문의</SubTitle>
          <List>
            <Item>개인정보와 관련된 문의사항은 [hanguswls@naver.com]으로 연락 주시기 바랍니다.</Item>
          </List>
        </Content>
        <Content>
          <SubTitle>4. 개정 이력</SubTitle>
          <List>
            <Item>시행일자: 2024년 12월 20일</Item>
          </List>
        </Content>
      </Contents>
    </Container>
  );
}

export default PrivacyPolicy;