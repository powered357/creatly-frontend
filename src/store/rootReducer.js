import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import courses from './courses';
import footer from './footer';
import notifications from './notifications';

const rootReducer = combineReducers({ notifications, auth, courses, footer });

export default rootReducer;
