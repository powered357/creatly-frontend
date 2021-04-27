import { useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { ROUTES } from 'CONSTANTS/routes';

import { createCourse } from 'STORE/admin';

import { Link, Icon } from 'UI-KIT';

import { ModalInput } from 'COMPONENTS/ModalInput';

import { NavStyled, NavItem, NavIcon } from './styles/NavStyled';

export const AdminNav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isCreating, setCreating] = useState(false);
  const [isCourseModalOpen, setCourseModalOpen] = useState(false);

  const openCourseModal = () => {
    setCourseModalOpen(true);
  };

  const closeCourseModal = useCallback(() => {
    setCourseModalOpen(false);
  }, []);

  const navigation = [
    {
      title: 'Мои курсы',
      route: ROUTES.ADMIN.MY_COURSES,
      icon: 'school',
    },
    {
      title: 'Создать новый курс',
      icon: 'add_circle',
      onClick: openCourseModal,
    },
  ];

  const handleCreateCourse = ({ name }) => {
    setCreating(true);
    dispatch(createCourse(name))
      .then(unwrapResult)
      .then(({ id }) => {
        setCreating(false);
        closeCourseModal();
        history.push(ROUTES.ADMIN.COURSE.MAIN.replace(':id', id));
      })
      .finally(() => setCreating(false));
  };

  return (
    <NavStyled>
      {navigation.map(({ title, route, icon, onClick }, i) => (
        <NavItem key={i}>
          <NavIcon>
            <Icon name={icon} size={20} />
          </NavIcon>
          <Link to={route} onClick={onClick} isActive={route === pathname} external={!!onClick}>
            {title}
          </Link>
        </NavItem>
      ))}
      <ModalInput
        name="name"
        placeholder="Введите название курса"
        buttonText="Создать"
        onSubmit={handleCreateCourse}
        isOpen={isCourseModalOpen}
        closeModal={closeCourseModal}
        isLoading={isCreating}
        autoClose={false}
      />
    </NavStyled>
  );
};
