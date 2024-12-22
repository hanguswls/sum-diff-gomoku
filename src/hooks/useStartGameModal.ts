import { StoneColor } from "../types/stone";
import useTurnStore from "../stores/useTurnStore";
import useModalStore from "../stores/useModalStore";

function useStartGameModal() {
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const { setFirstTurn } = useTurnStore();

  const handleStoneSelect = (color: StoneColor) => setFirstTurn(color);
  const handleStartButtonClick = () => closeModal();

  return ({
    isModalOpen,
    openModal,
    closeModal,
    handleStoneSelect,
    handleStartButtonClick
  })
}

export default useStartGameModal;