import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
  },
});

export const { logIn } = actions;

export default reducer;
