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
    MY_COURSES: '/admin/my-courses',
    COURSE: {
      MAIN: '/admin/course/:id',
      MODULES: ' /admin/course/:id/modules',
      LESSONS: ' /admin/course/:id/lessons',
    },
  },
  PRIVACY: '/privacy',
  REFUND: '/refund',
  SERVICE: '/service',
  COURSE: '/course/:id',
  MODULE: '/module/:id',
  ERROR: {
    NOT_FOUND: '/404',
  },
};
