import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetCourse } from 'API/course';
import { apiGetAllCourses } from 'API/home';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', () => apiGetAllCourses().then((res) => res.data));
export const fetchCourse = createAsyncThunk('course/fetchCourse', (id) => apiGetCourse(id).then((res) => res.data));

const initialState = {
  all: [],
  isLoading: false,
  course: null,
  modules: null,
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
      all: payload.data,
    }),
    [fetchCourse.fulfilled]: (state, { payload }) => ({
      ...state,
      course: payload.course,
      modules: payload.modules,
    }),
  },
});

export default reducer;
