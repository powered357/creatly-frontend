import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  success: null,
};

const { reducer, actions } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setErrorsMsg: (state, { payload }) => ({
      ...state,
      error: payload.message,
    }),
    clearErrorsMsg: (state) => ({
      ...state,
      error: null,
    }),
    setSuccessMsg: (state, { payload }) => ({
      ...state,
      success: payload.message,
    }),
    clearSuccessMsg: (state) => ({
      ...state,
      success: null,
    }),
  },
});

export const { setErrorsMsg, clearErrorsMsg, setSuccessMsg, clearSuccessMsg } = actions;

export default reducer;
