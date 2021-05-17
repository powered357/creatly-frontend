import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';

export const apiGetCourseOffers = (id) =>
  makeRequest('GET')(endpoints.offers.getCourseOffers(id))().then(({ data }) => data);
