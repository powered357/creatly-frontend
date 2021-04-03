import { Container } from 'COMPONENTS/Container';
import { Editor } from 'COMPONENTS/Editor';

import { CreateCourseStyled } from './styles/CreateCourseStyled';

const CreateCourse = () => (
  <CreateCourseStyled>
    <Container>
      <h1>Create course page</h1>
      <Editor />
    </Container>
  </CreateCourseStyled>
);

export default CreateCourse;
