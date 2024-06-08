import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// next store.ts, hook.ts

type CounterStatus = "active" | "inactive" | "pending...";

type CounterState = {
  count: number;
  status: CounterStatus;
};

const initialState: CounterState = {
  count: 15,
  status: "pending...",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;

export default counterSlice.reducer;