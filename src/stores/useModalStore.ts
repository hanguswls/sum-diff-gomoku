import { create } from "zustand";

interface ModalState {
  isModalOpen: boolean,
  closeModal: () => void,
  openModal: () => void,
}

const useModalStore = create<ModalState>()((set) => ({
  isModalOpen: true,
  closeModal: () => set({ isModalOpen: false }),
  openModal: () => set({ isModalOpen: true }),
}))

export default useModalStore;