import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';

export const apiGetAllCourses = () => makeRequest('GET')(endpoints.courses.getAll)();
