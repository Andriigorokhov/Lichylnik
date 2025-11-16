import { createSlice } from '@reduxjs/toolkit';


let historyId = 0;
const initialState = {
  value: 0,
  history: [{ id: historyId, value: 0 }], 
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState, 
 
  reducers: {
    increment: (state) => {    
      state.value += 1;
      state.history.unshift({ id: ++historyId, value: state.value });
    },
    decrement: (state) => {
      state.value -= 1;
      state.history.unshift({ id: ++historyId, value: state.value });
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;