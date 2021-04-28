import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';

export const apiGetCourse = (id) => makeRequest('GET')(endpoints.courses.getCourse(id))();

export const apiGetAllCourses = () => makeRequest('GET')(endpoints.courses.all)();
