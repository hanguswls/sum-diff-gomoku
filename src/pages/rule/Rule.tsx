import { Bold, Container, Content, Contents, Header, Item, List, SubTitle, Title, VideoGuide } from "../SharedStyles.styles";
import youtubeIcon from '../../assets/youtube.svg';
import descriptionImg from '../../assets/rule-description.svg';

function Rule() {
  return (
    <Container>
      <Header>
        <Title>게임 규칙</Title>
        <VideoGuide href='https://www.youtube.com/watch?v=CKlwtK6i61A'>
          <img src={youtubeIcon} alt="유튜브 링크" />
          대학전쟁 시즌 2 | 합차오목
        </VideoGuide>
      </Header>
      <Contents>
        <Content>
          <SubTitle>🎯 게임 목표</SubTitle>
          <List>
            <Item>자신의 돌을 전략적으로 배치하여 <Bold>가로, 세로, 또는 대각선으로 연속된 돌들의 합이 16</Bold>이 되도록 만듭니다.</Item>
          </List>
        </Content>
        <Content>
          <SubTitle>📋 기본 규칙</SubTitle>
          <List>
            <Item><Bold>백돌이 선공</Bold>입니다.</Item>
            <Item>각 플레이어는 <Bold>1~5까지의 숫자 돌을 각각 4개씩</Bold> 받습니다. (총 20개)</Item>
            <Item>플레이어는 턴을 번갈아가며 돌을 하나씩 놓습니다.</Item>
            <Item><Bold>첫 수는</Bold> 반드시 <Bold>3 이하</Bold>의 숫자 돌만 놓을 수 있습니다.</Item>
          </List>~
        </Content>
        <Content>
          <SubTitle>🧮 합산 규칙</SubTitle>
          <img src={descriptionImg} />
          <List>
            <Item>자신의 돌은 <Bold>더하고</Bold>, 상대방의 돌은 <Bold>뺍니다</Bold>.</Item>
            <Item><Bold>연속된 돌들의 합이 16</Bold>이 되면 승리합니다!</Item>
          </List>
        </Content>
        <Content>
          <SubTitle>⏰ 제한 시간</SubTitle>
          <List>
            <Item>각 턴당 <Bold>1분의 제한 시간</Bold>이 주어집니다.</Item>
            <Item>시간 내에 착수하지 못하면 상대방의 턴으로 넘어갑니다.</Item>
          </List>
        </Content>
      </Contents>
    </Container>
  )
}

export default Rule;