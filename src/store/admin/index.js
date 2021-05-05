import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  apiCreateCourse,
  apiGetAllCourses,
  apiGetCourse,
  apiUpdateCourse,
  apiDeleteCourse,
  apiCreateModule,
  apiCreateLesson,
  apiUpdateLesson,
  apiDeleteLesson,
} from 'API/admin';

export const createCourse = createAsyncThunk('admin/createCourse', (name) =>
  apiCreateCourse(name)
    .then(({ data }) => ({ ...data, name, published: false }))
    .catch((error) => console.log(error)),
);

export const fetchAllCourses = createAsyncThunk('admin/fetchAllCourses', () =>
  apiGetAllCourses()
    .then(({ data }) => data)
    .catch((error) => console.log(error)),
);

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

export const deleteCourse = createAsyncThunk('admin/deleteCourse', (id) =>
  apiDeleteCourse(id)
    .then(() => ({ id }))
    .catch((error) => console.log(error)),
);

export const createModule = createAsyncThunk('admin/createModule', ({ id, data }) =>
  apiCreateModule({ id, data })
    .then((res) => ({ id: res.data.id, name: data.name, position: data.position }))
    .catch((error) => console.log(error)),
);

export const createLesson = createAsyncThunk('admin/createLesson', ({ moduleId, data }) =>
  apiCreateLesson({ moduleId, data })
    .then((res) => ({ moduleId, id: res.data.id, name: data.name, position: data.position }))
    .catch((error) => console.log(error)),
);

export const updateLesson = createAsyncThunk('admin/updateLesson', ({ lessonId, moduleId, data }) =>
  apiUpdateLesson({ id: lessonId, data })
    .then(() => ({ lessonId, moduleId, ...data }))
    .catch((error) => console.log(error)),
);

export const deleteLesson = createAsyncThunk('admin/deleteLesson', ({ lessonId, moduleId }) =>
  apiDeleteLesson(lessonId)
    .then(() => ({ lessonId, moduleId }))
    .catch((error) => console.log(error)),
);

const initialState = {
  courses: {
    all: null,
    isLoading: false,
  },
  currentCourse: {
    course: null,
    modules: null,
    isLoading: false,
  },
};

const { reducer, actions } = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearCourse: (state) => {
      state.currentCourse = initialState.currentCourse;
    },
  },
  extraReducers: {
    [fetchAllCourses.pending]: (state) => {
      state.courses.isLoading = true;
    },
    [fetchAllCourses.fulfilled]: (state, { payload: { data } }) => {
      state.courses = {
        all: data,
        isLoading: false,
      };
    },
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
    [createCourse.fulfilled]: (state, { payload }) => {
      if (state.courses.all?.length) {
        state.courses.all.push(payload);
      } else {
        state.courses.all = [payload];
      }
    },
    [updateCourse.fulfilled]: (state, { payload }) => {
      state.currentCourse.course = { ...state.currentCourse.course, ...payload };
    },
    [deleteCourse.fulfilled]: (state, { payload: { id } }) => {
      state.courses.all = state.courses.all.filter((course) => course.id !== id);
    },
    [createModule.fulfilled]: (state, { payload }) => {
      if (state.currentCourse.modules?.length) {
        state.currentCourse.modules.push(payload);
      } else {
        state.currentCourse.modules = [payload];
      }
    },
    [createLesson.fulfilled]: (state, { payload }) => {
      const { moduleId, ...lesson } = payload;
      const moduleIndex = state.currentCourse.modules.findIndex(({ id }) => id === moduleId);

      if (state.currentCourse.modules[moduleIndex]?.lessons) {
        state.currentCourse.modules[moduleIndex].lessons.push(lesson);
      } else {
        state.currentCourse.modules[moduleIndex].lessons = [lesson];
      }
    },
    [updateLesson.fulfilled]: (state, { payload }) => {
      const { lessonId, moduleId, ...lesson } = payload;
      const moduleIndex = state.currentCourse.modules.findIndex(({ id }) => id === moduleId);
      const lessonIndex = state.currentCourse.modules[moduleIndex].lessons.findIndex(({ id }) => id === lessonId);

      state.currentCourse.modules[moduleIndex].lessons[lessonIndex] = {
        ...state.currentCourse.modules[moduleIndex].lessons[lessonIndex],
        ...lesson,
      };
    },
    [deleteLesson.fulfilled]: (state, { payload: { lessonId, moduleId } }) => {
      const moduleIndex = state.currentCourse.modules.findIndex(({ id }) => id === moduleId);
      const newLessons = state.currentCourse.modules[moduleIndex].lessons.filter(({ id }) => id !== lessonId);

      state.currentCourse.modules[moduleIndex].lessons = newLessons;
    },
  },
});

export const { clearCourse } = actions;

export default reducer;
