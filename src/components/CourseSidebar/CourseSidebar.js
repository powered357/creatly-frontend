import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory, useParams } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { createModule, createLesson, updateModule, deleteModule } from 'STORE/admin';

import { ModalConfirm } from 'COMPONENTS/ModalConfirm';
import { TooltipMenu } from 'COMPONENTS/TooltipMenu';
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

export const CourseSidebar = ({ course, modules, isAdmin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [isCreating, setCreating] = useState(false);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [isModuleModalOpen, setModuleModalOpen] = useState(false);
  const [isLessonModalOpen, setLessonModalOpen] = useState(false);
  const [isModuleEditOpen, setModuleEditOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const createLessonRoute = ({ courseId, moduleId, lessonId }) =>
    replaceByObj(!isAdmin ? ROUTES.COURSE.LESSON : ROUTES.ADMIN.COURSE.LESSON, {
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

  const editModule = (id) => {
    setActiveModuleId(id);
    openEditModuleModal();
  };

  const openEditModuleModal = () => {
    setModuleEditOpen(true);
  };

  const closeEditModuleModal = useCallback(() => {
    setModuleEditOpen(false);
  }, []);

  const openConfirmModal = (id) => {
    setActiveModuleId(id);
    setConfirmModalOpen(true);
  };

  const closeConfirmModal = useCallback(() => {
    setConfirmModalOpen(false);
  }, []);

  const handleModulePublish = (id) => {
    const module = modules.find((el) => el.id === id);
    dispatch(updateModule({ id, data: { ...module, published: !module.published } }));
  };

  const handleModuleDelete = () => {
    setDeleting(true);
    const module = modules.find((el) => el.id === activeModuleId);
    dispatch(deleteModule(module.id))
      .then(unwrapResult)
      .then(() => {
        setDeleting(false);
        setActiveModuleId(null);
        closeConfirmModal();
      });
  };

  const handleModuleEdit = ({ newModuleName }) => {
    const updatedModule = modules.find((module) => module.id === activeModuleId);
    setCreating(true);
    dispatch(updateModule({ id: activeModuleId, data: { ...updatedModule, name: newModuleName } }))
      .then(unwrapResult)
      .then(() => {
        setCreating(false);
        setActiveModuleId(null);
        closeEditModuleModal();
      });
  };

  const tooltipMenuItems = [
    { title: '????????????????????????', action: handleModulePublish },
    { title: '??????????????????????????', action: editModule },
    { title: '??????????????', action: openConfirmModal },
  ];

  return (
    <SidebarStyled>
      {!isAdmin ? (
        <Heading>
          <Title>{course.name}</Title>
        </Heading>
      ) : (
        <Heading>
          {!course.published && <LockIcon />}
          <Title onClick={navigateToCourse} withHover>
            {course.name}
          </Title>
        </Heading>
      )}
      <Nav>
        {modules?.map(({ id, name, published, lessons }, i) => (
          <div key={id}>
            <NavItem isActive={id === params.moduleId}>
              {isAdmin && !published && <LockIcon />}
              <NavOrder>{i + 1}.</NavOrder> {name}
              {isAdmin && (
                <TooltipMenu
                  menuItems={tooltipMenuItems}
                  moduleId={id}
                  published={published}
                  iconName="settings"
                  iconSize={16}
                />
              )}
            </NavItem>
            <Nav>
              {lessons?.map((item, index) => (
                <NavItem key={item.id}>
                  <NavLink
                    onClick={navigateToLesson({ moduleId: id, lessonId: item.id })}
                    isActive={item.id === params.lessonId}
                  >
                    {isAdmin && !item.published && <LockIcon />}
                    <NavOrder>{index + 1}.</NavOrder> {item.name}
                  </NavLink>
                </NavItem>
              ))}
              {isAdmin && (
                <NavItem>
                  <NavLink onClick={openLessonModal(id)} bold>
                    <AddIcon />
                    ???????????????? ????????
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </div>
        ))}
        {isAdmin && (
          <NavItem>
            <NavLink onClick={openModuleModal} bold>
              <AddIcon />
              ???????????????? ????????????
            </NavLink>
          </NavItem>
        )}
      </Nav>
      {isAdmin && (
        <>
          <ModalInput
            name="module"
            placeholder="?????????????? ???????????????? ????????????"
            onSubmit={addModule}
            isOpen={isModuleModalOpen}
            closeModal={closeModuleModal}
            isLoading={isCreating}
            autoClose={false}
          />
          <ModalInput
            name="lesson"
            placeholder="?????????????? ???????????????? ??????????"
            onSubmit={addLesson}
            isOpen={isLessonModalOpen}
            closeModal={closeLessonModal}
            isLoading={isCreating}
            autoClose={false}
          />
          <ModalInput
            name="newModuleName"
            placeholder="???????????????? ???????????????? ????????????"
            onSubmit={handleModuleEdit}
            isOpen={isModuleEditOpen}
            closeModal={closeEditModuleModal}
            isLoading={isCreating}
            autoClose={false}
            buttonText="????????????????"
          />
          <ModalConfirm
            title="???? ???????????????"
            text="???? ???????????? ???????????? ?????????????? ???????? ????????????? ?????? ???????????? ?????????? ????????????????????????."
            isOpen={isConfirmModalOpen}
            closeModal={closeConfirmModal}
            successFunc={handleModuleDelete}
            cancelFunc={closeConfirmModal}
            isLoading={isDeleting}
            autoClose={false}
          />
        </>
      )}
    </SidebarStyled>
  );
};

CourseSidebar.propTypes = {
  course: PropTypes.object,
  modules: PropTypes.array,
  isAdmin: PropTypes.bool,
};

CourseSidebar.defaultProps = {
  course: {},
  modules: null,
  isAdmin: false,
};
