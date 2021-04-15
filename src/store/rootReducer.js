import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import courses from './courses';
import footer from './footer';
import admin from './admin';

const rootReducer = combineReducers({ auth, courses, footer, admin });

export default rootReducer;
