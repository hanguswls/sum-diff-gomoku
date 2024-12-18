import { create } from "zustand";
import { Stone, StoneState } from "../types/stone";
import { INITIAL_STONES } from "../constants/game";

const useStoneStore = create<StoneState>()((set) => ({
  selectedStone: null,
  setSelectedStone: (stone) => set({selectedStone: stone}),

  whiteStones: INITIAL_STONES,
  blackStones: INITIAL_STONES,
  decrementStone: (stone: Stone) => {
    set((state) => ({
      [`${stone.color}Stones`]: {
        ...state[`${stone.color}Stones`],
        [stone.type]: state[`${stone.color}Stones`][stone.type] - 1
      }
    }))
  },

  reset: () => set({
    selectedStone: null,
    whiteStones: INITIAL_STONES,
    blackStones: INITIAL_STONES
  })
}))

export default useStoneStore;