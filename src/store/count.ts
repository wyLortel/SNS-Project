import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  persist(
    subscribeWithSelector(
      immer(
        combine({ count: 0 }, (set) => ({
          actions: {
            increase: () => {
              set((state) => {
                state.count += 1;
              });
            },
            decrease: () => {
              set((state) => {
                state.count -= 1;
              });
            },
          },
        })),
      ),
    ),
    {
      name: "countStore",
      partialize: (store) => ({
        count: store.count,
      }),
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count, prevCount);
  },
);

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
