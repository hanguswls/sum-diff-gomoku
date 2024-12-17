import { create } from "zustand";
import { FIRST_TURN } from "../constants/game";
import { TurnState } from "../types/turn";

const useTurnStore = create<TurnState>()((set) => ({
  curTurn: FIRST_TURN,
  switchTurn: () => set((state) => ({
    curTurn: state.curTurn === 'white' ? 'black' : 'white'
  })),

  isFirstTurns: {
    'white': true,
    'black': true,
  },
  finishFirstTurns: (color) => set((state) => ({
    isFirstTurns: {
      ...state.isFirstTurns,
      [color]: false
    }
  }))
}))

export default useTurnStore;

