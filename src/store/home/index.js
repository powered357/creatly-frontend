import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetAllCourses } from 'API/home';

export const fetchCourses = createAsyncThunk('home/fetchCourses', () => apiGetAllCourses().then((res) => res.data));

const initialState = {
  courses: [],
  isLoading: false,
};

const { reducer } = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourses.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [fetchCourses.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      courses: payload.data,
    }),
  },
});

export default reducer;
