import { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { apiGetLesson } from 'API/admin';

import { ROUTES } from 'CONSTANTS/routes';

import { fetchCourse, updateLesson, deleteLesson } from 'STORE/admin';

import { Input, Button, FormError, Loader } from 'UI-KIT';

import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { CourseSidebar } from 'COMPONENTS/CourseSidebar';
import { Editor } from 'COMPONENTS/Editor';
import { RouteLeavingGuard } from 'COMPONENTS/RouteLeavingGuard';

import { LessonStyled, Form, FormField, Title, ButtonRow, ButtonGroup, EditorWrap } from './styles/LessonStyled';

export const Lesson = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { courseId, moduleId, lessonId } = useParams();
  const { currentCourse } = useSelector(({ admin }) => admin);
  const { course, modules, isLoading } = currentCourse;
  const { register, handleSubmit, errors, reset } = useForm();
  const initialContent = [{ type: 'paragraph', children: [{ text: '' }] }];
  const contentRef = useRef(initialContent);
  const [content, setContent] = useState(initialContent);
  const [isPublished, setPublished] = useState(false);
  const [isLessonLoading, setLessonLoading] = useState(true);
  const [isSendingData, setSendingData] = useState(false);
  const [isPublishing, setPublishing] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const hasContentChanged = JSON.stringify(content) !== JSON.stringify(contentRef.current);

  useEffect(() => {
    setLessonLoading(true);
    apiGetLesson(lessonId)
      .then(({ data }) => {
        reset(data);
        setPublished(data.published);

        if (data?.content) {
          const parsedContent = JSON.parse(data.content);

          contentRef.current = parsedContent;
          setContent(parsedContent);
        }
      })
      .finally(() => setLessonLoading(false));

    return () => {
      setContent(initialContent);
      contentRef.current = initialContent;
    };
  }, [lessonId]);

  useEffect(() => {
    if (!course && !isLoading) {
      dispatch(fetchCourse(courseId));
    }
  }, [course, isLoading]);

  const handleEditorOnChange = (value) => {
    setContent(value);
  };

  const submitData = ({ name }) => {
    setSendingData(true);
    dispatch(updateLesson({ lessonId, moduleId, data: { name, content: JSON.stringify(content) } })).finally(() =>
      setSendingData(false),
    );
  };

  const handlePublish = () => {
    setPublishing(true);
    dispatch(updateLesson({ lessonId, moduleId, data: { published: !isPublished } })).finally(() =>
      setPublishing(false),
    );
  };

  const handleDelete = () => {
    setDeleting(true);
    dispatch(deleteLesson({ lessonId, moduleId }))
      .then(() => history.push(ROUTES.ADMIN.COURSE.MAIN.replace(':id', courseId)))
      .finally(() => setDeleting(false));
  };

  const navigateTo = (route) => {
    history.push(route);
  };

  return (
    <LessonStyled>
      <Container>
        {course && !isLoading ? (
          <CourseTemplate sidebar={<CourseSidebar course={course} modules={modules} isAdmin />}>
            {!isLessonLoading ? (
              <>
                <Form onSubmit={handleSubmit(submitData)}>
                  <FormField>
                    <Title>Название урока</Title>
                    <Input ref={register({ required: true })} name="name" placeholder="Введите название урока" />
                    {errors.name?.type === 'required' && <FormError>Это поле обязательное</FormError>}
                  </FormField>
                  <FormField>
                    <Title>Контент урока</Title>
                    <EditorWrap>
                      <Editor value={content} onChange={handleEditorOnChange} />
                    </EditorWrap>
                    {errors.description?.type === 'required' && <FormError>Это поле обязательное</FormError>}
                  </FormField>
                  <ButtonRow>
                    <ButtonGroup>
                      <Button type="submit" isLoading={isSendingData}>
                        Сохранить
                      </Button>
                      <Button onClick={handlePublish} theme="inverse" isLoading={isPublishing}>
                        {isPublished ? 'Скрыть курс' : 'Опубликовать'}
                      </Button>
                    </ButtonGroup>
                    <Button onClick={handleDelete} theme="danger" isLoading={isDeleting}>
                      Удалить
                    </Button>
                  </ButtonRow>
                </Form>
                <RouteLeavingGuard when={hasContentChanged} navigate={navigateTo} shouldBlockNavigation />
              </>
            ) : (
              <Loader padding={50} />
            )}
          </CourseTemplate>
        ) : (
          <Loader fullHeight />
        )}
      </Container>
    </LessonStyled>
  );
};
