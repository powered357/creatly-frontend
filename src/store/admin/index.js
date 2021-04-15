import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiGetCourse, apiUpdateCourse, apiCreateModule } from 'API/admin';

export const fetchCourse = createAsyncThunk('admin/fetchCourse', (id) =>
  apiGetCourse(id)
    .then(({ data }) => data)
    .catch((error) => console.log(error)),
);

export const updateCourse = createAsyncThunk('admin/updateCourse', ({ id, data }) =>
  apiUpdateCourse({ id, data })
    .then(() => data)
    .catch((error) => console.log(error)),
);

export const createModule = createAsyncThunk('admin/createModule', ({ id, data }) =>
  apiCreateModule({ id, data })
    .then((res) => ({ id: res.data.id, name: data.name, position: data.position }))
    .catch((error) => console.log(error)),
);

const initialState = {
  currentCourse: {
    course: null,
    modules: [],
    isLoading: false,
  },
};

const { reducer, actions } = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearCourse: () => initialState,
  },
  extraReducers: {
    [fetchCourse.pending]: (state) => {
      state.currentCourse.isLoading = true;
    },
    [fetchCourse.fulfilled]: (state, { payload: { course, modules } }) => {
      state.currentCourse = {
        course,
        modules,
        isLoading: false,
      };
    },
    [updateCourse.fulfilled]: (state, { payload }) => {
      state.currentCourse.course = { ...state.currentCourse.course, ...payload };
    },
    [createModule.fulfilled]: (state, { payload }) => {
      state.currentCourse.modules = [...state.currentCourse.modules, payload];
    },
  },
});

export const { clearCourse } = actions;

export default reducer;
