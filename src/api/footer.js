import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';

export const apiGetFooterSettings = () => makeRequest('GET')(endpoints.footer)();
