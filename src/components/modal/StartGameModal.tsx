import useStartGameModal from "../../hooks/useStartGameModal";
import { SelectableStone } from "../game/stone/Stone.styles";
import { Button, ButtonGroup, ModalContainer, Overlay, SelectorContainer, Title } from "./StartGameModal.styles";

function StartGameModal() {
  const { isModalOpen, handleStoneSelect, handleStartButtonClick } = useStartGameModal();
  if (!isModalOpen) return;

  return (
    <Overlay>
      <ModalContainer>
        <Title>선공을 선택하세요</Title>
        <SelectorContainer>
          <SelectableStone
            color='black'
            onClick={() => handleStoneSelect('black')}
          />
          <SelectableStone
            color='white'
            onClick={() => handleStoneSelect('white')}
          />
        </SelectorContainer>
        <ButtonGroup>
          <Button onClick={handleStartButtonClick}>시작하기</Button>
          <Button>게임 규칙</Button>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  )
}

export default StartGameModal;