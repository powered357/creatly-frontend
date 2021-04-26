import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  success: null,
};

const { reducer, actions } = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setErrorMsg: (state, { payload }) => ({
      error: payload.message,
    }),
    clearErrorMsg: () => ({
      error: null,
    }),
    setSuccessMsg: (state, { payload }) => ({
      success: payload.message,
    }),
    clearSuccessMsg: () => ({
      success: null,
    }),
  },
});

export const { setErrorMsg, clearErrorMsg, setSuccessMsg, clearSuccessMsg } = actions;

export default reducer;
