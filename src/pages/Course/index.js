import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { fetchCourse } from 'STORE/courses';

const Course = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchCourse(params.id));
  }, []);
  return <h1>Hello from course page</h1>;
};

export default Course;
