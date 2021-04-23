import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory, useParams } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { createModule, createLesson } from 'STORE/admin';

import { ModalInput } from 'COMPONENTS/ModalInput';

import { replaceByObj } from 'UTILS/replaceByObj';

import {
  SidebarStyled,
  Heading,
  Title,
  Nav,
  NavItem,
  NavLink,
  NavOrder,
  AddIcon,
  LockIcon,
} from './styles/SidebarStyled';

export const CourseSidebar = ({ course, modules }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [isCreating, setCreating] = useState(false);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [isModuleModalOpen, setModuleModalOpen] = useState(false);
  const [isLessonModalOpen, setLessonModalOpen] = useState(false);

  const createLessonRoute = ({ courseId, moduleId, lessonId }) =>
    replaceByObj(ROUTES.ADMIN.COURSE.LESSON, {
      ':courseId': courseId,
      ':moduleId': moduleId,
      ':lessonId': lessonId,
    });

  const openModuleModal = () => {
    setModuleModalOpen(true);
  };

  const closeModuleModal = useCallback(() => {
    setModuleModalOpen(false);
  }, []);

  const addModule = ({ module }) => {
    const position = modules?.length + 1 || 1;

    setCreating(true);
    dispatch(createModule({ id: course.id, data: { name: module, position } })).finally(() => {
      setCreating(false);
      closeModuleModal();
    });
  };

  const openLessonModal = (moduleId) => () => {
    setLessonModalOpen(true);
    setActiveModuleId(moduleId);
  };

  const closeLessonModal = useCallback(() => {
    setLessonModalOpen(false);
  }, []);

  const addLesson = ({ lesson }) => {
    const activeModule = modules.filter(({ id }) => id === activeModuleId)[0];
    const position = activeModule?.lessons?.length + 1 || 1;

    setCreating(true);
    dispatch(createLesson({ moduleId: activeModuleId, data: { name: lesson, position } }))
      .then(unwrapResult)
      .then(({ id }) => {
        const route = createLessonRoute({ courseId: course.id, moduleId: activeModuleId, lessonId: id });

        setCreating(false);
        setActiveModuleId(null);
        closeLessonModal();
        history.push(route);
      });
  };

  const navigateToLesson = ({ moduleId, lessonId }) => () => {
    const route = createLessonRoute({ courseId: course.id, moduleId, lessonId });

    history.push(route);
  };

  const navigateToCourse = () => {
    history.push(ROUTES.ADMIN.COURSE.MAIN.replace(':id', course.id));
  };

  return (
    <SidebarStyled>
      <Heading>
        {!course.published && <LockIcon />}
        <Title onClick={navigateToCourse}>{course.name}</Title>
      </Heading>
      <Nav>
        {modules?.map(({ id, name, published, lessons }, i) => (
          <div key={id}>
            <NavItem isActive={id === params.moduleId}>
              {!published && <LockIcon />}
              <NavOrder>{i + 1}.</NavOrder> {name}
            </NavItem>
            <Nav>
              {lessons?.map((item, index) => (
                <NavItem key={item.id}>
                  <NavLink
                    onClick={navigateToLesson({ moduleId: id, lessonId: item.id })}
                    isActive={item.id === params.lessonId}
                  >
                    {!item.published && <LockIcon />}
                    <NavOrder>{index + 1}.</NavOrder> {item.name}
                  </NavLink>
                </NavItem>
              ))}
              <NavItem>
                <NavLink onClick={openLessonModal(id)} bold>
                  <AddIcon />
                  Добавить урок
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        ))}
        <NavItem>
          <NavLink onClick={openModuleModal} bold>
            <AddIcon />
            Добавить модуль
          </NavLink>
        </NavItem>
      </Nav>
      <ModalInput
        name="module"
        placeholder="Введите название модуля"
        onSubmit={addModule}
        isOpen={isModuleModalOpen}
        closeModal={closeModuleModal}
        isLoading={isCreating}
        autoClose={false}
      />
      <ModalInput
        name="lesson"
        placeholder="Введите название урока"
        onSubmit={addLesson}
        isOpen={isLessonModalOpen}
        closeModal={closeLessonModal}
        isLoading={isCreating}
        autoClose={false}
      />
    </SidebarStyled>
  );
};

CourseSidebar.propTypes = {
  course: PropTypes.object,
  modules: PropTypes.array,
};

CourseSidebar.defaultProps = {
  course: {},
  modules: null,
};
