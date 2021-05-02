import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetStudentAccount } from 'API/student';

export const fetchStudentAccount = createAsyncThunk('student/fetchStudentAccount', () =>
  apiGetStudentAccount().then(({ data }) => data),
);

const initialState = {
  account: null,
  isLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'student',
  initialState,
  reducers: {
    clearStudent: () => initialState,
  },
  extraReducers: {
    [fetchStudentAccount.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStudentAccount.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.account = payload;
    },
  },
});

export const { clearStudent } = actions;

export default reducer;
