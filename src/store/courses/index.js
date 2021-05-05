import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetAllCourses, apiGetCourse } from 'API/courses';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', () => apiGetAllCourses().then(({ data }) => data));
export const fetchCourse = createAsyncThunk('course/fetchCourse', (id) => apiGetCourse(id).then(({ data }) => data));

const initialState = {
  all: [],
  isLoading: false,
  course: null,
  modules: null,
};

const { reducer, actions } = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    clearCourse: (state) => {
      state.course = null;
      state.modules = null;
    },
  },
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCourses.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.all = payload.data;
    },
    [fetchCourse.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCourse.fulfilled]: (state, { payload: { course, modules } }) => {
      state.course = course;
      state.modules = modules;
      state.isLoading = false;
    },
  },
});

export const { clearCourse } = actions;

export default reducer;
