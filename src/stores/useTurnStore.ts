import { create } from "zustand";
import { FIRST_TURN } from "../constants/game";
import { TurnState } from "../types/turn";

const useTurnStore = create<TurnState>()((set) => ({
  curTurn: FIRST_TURN,
  switchTurn: () => set((state) => ({
    curTurn: state.curTurn === 'white' ? 'black' : 'white'
  })),

  isFirstTurn: true,
  finishFirstTurn: () => set({ isFirstTurn: false }),

  reset: () => set({
    curTurn: FIRST_TURN,
    isFirstTurn: true,
  })
}))

export default useTurnStore;

