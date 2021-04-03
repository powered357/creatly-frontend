export const ROUTES = {
  ROOT: '/',
  ACCOUNT: {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    VERIFICATION: '/verification',
  },
  ADMIN: {
    LOGIN: '/admin/login',
    CREATE_COURSE: '/admin/create-course',
  },
  COURSE: '/course/:id',
  MODULE: '/module/:id',
  ERROR: {
    NOT_FOUND: '/404',
  },
};
