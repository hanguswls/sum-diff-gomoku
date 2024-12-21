import { create } from "zustand";
import { FIRST_TURN } from "../constants/game";
import { TurnState } from "../types/turn";

const useTurnStore = create<TurnState>()((set) => ({
  curTurn: FIRST_TURN,
  switchTurn: () => set((state) => ({
    curTurn: state.curTurn === 'white' ? 'black' : 'white'
  })),
  resetCount: 0,

  isFirstTurn: true,
  finishFirstTurn: () => set({ isFirstTurn: false }),

  reset: () => set((state) => ({
    curTurn: FIRST_TURN,
    isFirstTurn: true,
    resetCount: state.resetCount + 1,
  }))
}))

export default useTurnStore;

