import { create } from "zustand";
import { StoneColor, StoneState, StoneType } from "../types/stone";
import { INITIAL_STONES } from "../constants/game";

const useStoneStore = create<StoneState>()((set) => ({
  selectedStone: null,
  setSelectedStone: (stone) => set({selectedStone: stone}),

  whiteStones: INITIAL_STONES,
  blackStones: INITIAL_STONES,
  decrementStone: (color: StoneColor, type: StoneType) => {
    set((state) => ({
      [`${color}Stones`]: {
        ...state[`${color}Stones`],
        [type]: state[`${color}Stones`][type] - 1
      }
    }))
  }
}))

export default useStoneStore;