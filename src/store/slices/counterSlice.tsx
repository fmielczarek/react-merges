import InitialState, { UpdateCounterAction } from '../../types/redux/counter';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: UpdateCounterAction,
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
