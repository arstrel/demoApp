import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'foodList',
  initialState: {
    fullList: [],
  },
  reducers: {
    setMealsFullList: (state, action) => {
      state.fullList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMealsFullList } = counterSlice.actions;

export default counterSlice.reducer;
