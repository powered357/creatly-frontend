import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetAllCourses } from 'API/home';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', () => apiGetAllCourses().then((res) => res.data));

const initialState = {
  courses: [],
  isLoading: false,
};

const { reducer } = createSlice({
  name: 'courses',
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
