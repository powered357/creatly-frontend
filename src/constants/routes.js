export const ROUTES = {
  ROOT: '/',
  ACCOUNT: {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    VERIFICATION: '/verification',
  },
  ADMIN: {
    LOGIN: '/admin/login',
    MY_COURSES: '/admin/my-courses',
    COURSE: {
      MAIN: '/admin/courses/:id',
      LESSON: '/admin/courses/:courseId/modules/:moduleId/lesson/:lessonId',
    },
  },
  PRIVACY: '/privacy',
  REFUND: '/refund',
  SERVICE: '/service',
  COURSE: {
    MAIN: '/course/:id',
    INFO: '/course-info/:id',
  },
  MODULE: '/module/:id',
  ERROR: {
    NOT_FOUND: '/404',
  },
};
