import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';
import { getToken } from 'UTILS/getToken';

export const apiGetStudentAccount = () =>
  makeRequest('GET')(endpoints.student.account)({
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const apiGetModuleLessons = (id) =>
  makeRequest('GET')(endpoints.student.getModuleLessons(id))({
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const apiGetLesson = (id) =>
  makeRequest('GET')(endpoints.student.getLesson(id))({
    headers: { Authorization: `Bearer ${getToken()}` },
  });
