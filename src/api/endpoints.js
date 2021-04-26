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
    getCourseById: (id) => `${API_URL}/admins/courses/${id}`,
    createModule: (id) => `${API_URL}/admins/courses/${id}/modules`,
    createLesson: (id) => `${API_URL}/admins/modules/${id}/lessons`,
    getLessonById: (id) => `${API_URL}/admins/lessons/${id}`,
  },
  courses: {
    getAll: `${API_URL}/courses`,
    getById: (id) => `${API_URL}/courses/${id}`,
  },
  footer: `${API_URL}/settings`,
};
