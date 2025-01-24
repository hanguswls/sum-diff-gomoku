import { create } from "zustand";
import { StoneColor } from "../types/stone";
import { DEFAULT_FIRST_TURN } from "../constants/game";

export interface TurnState {
  curTurn: StoneColor;
  switchTurn: () => void;

  isFirstTurn: boolean;
  finishFirstTurn: () => void;
  setFirstTurn: (color: StoneColor) => void;

  isGameOver: boolean;
  setGameOver: () => void;

  resetCount: number;
  reset: () => void;
}

const useTurnStore = create<TurnState>()((set) => ({
  curTurn: DEFAULT_FIRST_TURN,
  switchTurn: () => set((state) => ({
    curTurn: state.curTurn === 'white' ? 'black' : 'white'
  })),

  isFirstTurn: true,
  finishFirstTurn: () => set({ isFirstTurn: false }),
  setFirstTurn: (color: StoneColor) => set({ curTurn: color }),

  isGameOver: false,
  setGameOver: () => set({ isGameOver: true }),

  resetCount: 0,
  reset: () => set((state) => ({
    curTurn: DEFAULT_FIRST_TURN,
    isFirstTurn: true,
    isGameOver: false,
    resetCount: state.resetCount + 1,
  })),
}))

export default useTurnStore;

