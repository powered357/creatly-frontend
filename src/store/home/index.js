import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetAllCourses } from 'API/home';

const fetchCourses = createAsyncThunk('/courses', () => {
  apiGetAllCourses().then((response) => response.data);
});

const initialState = {
  courses: [],
};

const { reducer } = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCourses.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.courses = action.payload;
    },
  },
});

export { fetchCourses };

export default reducer;
