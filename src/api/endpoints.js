const API_URL = `${API_HOST}/api/v1`;

export const endpoints = {
  refresh: `${API_URL}/students/auth/refresh`,
  login: `${API_URL}/students/sign-in`,
  registration: `${API_URL}/students/sign-up`,
  verification: (code) => `${API_URL}/students/verify/${code}`,
  admin: {
    refresh: `${API_URL}/admins/auth/refresh`,
    login: `${API_URL}/admins/sign-in`,
    courses: `${API_URL}/admins/courses`,
    getCourse: (id) => `${API_URL}/admins/courses/${id}`,
    createModule: (id) => `${API_URL}/admins/courses/${id}/modules`,
    getModuleById: (id) => `${API_URL}/admins/modules/${id}`,
    createLesson: (id) => `${API_URL}/admins/modules/${id}/lessons`,
    getLesson: (id) => `${API_URL}/admins/lessons/${id}`,
  },
  courses: {
    all: `${API_URL}/courses`,
    getCourse: (id) => `${API_URL}/courses/${id}`,
  },
  offers: {
    getCourseOffers: (id) => `${API_URL}/courses/${id}/offers`,
  },
  student: {
    account: `${API_URL}/students/account`,
    courses: `${API_URL}/students/courses/`,
    getModuleLessons: (id) => `${API_URL}/students/modules/${id}/lessons`,
    getLesson: (id) => `${API_URL}/students/lessons/${id}`,
  },
  footer: `${API_URL}/settings`,
};
