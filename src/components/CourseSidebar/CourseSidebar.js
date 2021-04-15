import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { createModule } from 'STORE/admin';

import { InputModal } from 'COMPONENTS/InputModal';

import { SidebarStyled, Title, Nav, NavItem, NavLink, AddIcon, LockIcon } from './styles/SidebarStyled';

export const CourseSidebar = ({ course, modules }) => {
  const dispatch = useDispatch();
  const [isCreating, setCreating] = useState(false);
  const [isModuleModalOpen, setModuleModalOpen] = useState(false);

  const openModuleModal = useCallback(() => {
    setModuleModalOpen(true);
  }, []);

  const closeModuleModal = useCallback(() => {
    setModuleModalOpen(false);
  }, []);

  const addModule = ({ name }) => {
    const position = modules?.length + 1 || 1;

    setCreating(true);
    dispatch(createModule({ id: course.id, data: { name, position } })).finally(() => {
      setCreating(false);
      closeModuleModal();
    });
  };

  return (
    <SidebarStyled>
      <Title>
        {course.name}
        {!course.published && <LockIcon />}
      </Title>
      <Nav>
        {modules?.map(({ id, name, position }) => (
          <NavItem key={id}>
            {position}. {name}
          </NavItem>
        ))}
        <NavItem>
          <NavLink onClick={openModuleModal}>
            <AddIcon />
            Добавить модуль
          </NavLink>
        </NavItem>
      </Nav>
      <InputModal
        name="name"
        placeholder="Введите название модуля"
        onSubmit={addModule}
        isOpen={isModuleModalOpen}
        closeModal={closeModuleModal}
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
