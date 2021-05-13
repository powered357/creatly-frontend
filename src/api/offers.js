import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';

export const apiGetOffersByCourse = (id) =>
  makeRequest('GET')(endpoints.offers.getOffersByCourse(id))().then(({ data }) => data);
