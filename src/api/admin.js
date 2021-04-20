import { endpoints } from 'API/endpoints';

import { getToken } from 'UTILS/getToken';
import { makeRequest } from 'UTILS/makeRequest';

export const apiGetAllCourses = () =>
  makeRequest('GET')(endpoints.admin.courses)({ headers: { Authorization: `Bearer ${getToken(true)}` } });

export const apiCreateCourse = (name) =>
  makeRequest('POST')(endpoints.admin.courses)({
    headers: { Authorization: `Bearer ${getToken(true)}` },
    data: { name },
  });

export const apiGetCourse = (id) =>
  makeRequest('GET')(endpoints.admin.getCourseById(id))({ headers: { Authorization: `Bearer ${getToken(true)}` } });

export const apiUpdateCourse = ({ id, data }) =>
  makeRequest('PUT')(endpoints.admin.getCourseById(id))({
    headers: { Authorization: `Bearer ${getToken(true)}` },
    data,
  });

export const apiDeleteCourse = (id) =>
  makeRequest('DELETE')(endpoints.admin.getCourseById(id))({ headers: { Authorization: `Bearer ${getToken(true)}` } });

export const apiCreateModule = ({ id, data }) =>
  makeRequest('POST')(endpoints.admin.createModule(id))({
    headers: { Authorization: `Bearer ${getToken(true)}` },
    data,
  });

export const apiCreateLesson = ({ moduleId, data }) =>
  makeRequest('POST')(endpoints.admin.createLesson(moduleId))({
    headers: { Authorization: `Bearer ${getToken(true)}` },
    data,
  });
