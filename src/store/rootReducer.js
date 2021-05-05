import { combineReducers } from '@reduxjs/toolkit';

import courses from './courses';
import footer from './footer';
import notifications from './notifications';
import admin from './admin';
import student from './student';

const rootReducer = combineReducers({ notifications, courses, footer, admin, student });

export default rootReducer;
