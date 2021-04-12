import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import courses from './courses';
import footer from './footer';

const rootReducer = combineReducers({ auth, courses, footer });

export default rootReducer;
