import { endpoints } from 'API/endpoints';

import { getToken } from 'UTILS/getToken';
import { makeRequest } from 'UTILS/makeRequest';

const headers = { Authorization: `Bearer ${getToken(true)}` };

export const apiGetAllCourses = () => makeRequest('GET')(endpoints.admin.courses)({ headers });

export const apiCreateCourse = (name) =>
  makeRequest('POST')(endpoints.admin.courses)({
    headers,
    data: { name },
  });

export const apiGetCourse = (id) => makeRequest('GET')(endpoints.admin.getCourseById(id))({ headers });

export const apiUpdateCourse = ({ id, data }) =>
  makeRequest('PUT')(endpoints.admin.getCourseById(id))({
    headers,
    data,
  });

export const apiDeleteCourse = (id) => makeRequest('DELETE')(endpoints.admin.getCourseById(id))({ headers });
