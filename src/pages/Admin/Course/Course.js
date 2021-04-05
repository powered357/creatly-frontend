import { useState, useCallback } from 'react';

import { Container } from 'COMPONENTS/Container';
import { CourseTemplate } from 'COMPONENTS/CourseTemplate';
import { AdminSidebar } from 'COMPONENTS/AdminSidebar';
import { InputModal } from 'COMPONENTS/InputModal';

import { CourseStyled, Title, EditIcon } from './styles/CourseStyled';

export const Course = () => {
  const [isTitleModalOpen, setTitleModalOpen] = useState(false);

  const openTitleModal = useCallback(() => {
    setTitleModalOpen(true);
  }, []);

  const closeTitleModal = useCallback(() => {
    setTitleModalOpen(false);
  }, []);

  const onEditClick = () => {
    openTitleModal();
  };

  const onTitleChange = ({ title }) => {
    console.log({ title });
    closeTitleModal();
  };

  return (
    <CourseStyled>
      <Container>
        <CourseTemplate sidebar={<AdminSidebar />}>
          <AdminSidebar direction="horizontal" />
          <Title>
            Архитектура современных приложений
            <EditIcon onClick={onEditClick} />
          </Title>
          blah-blah-blah
        </CourseTemplate>
      </Container>
      <InputModal
        name="title"
        placeholder="Введите новое название"
        onSubmit={onTitleChange}
        isOpen={isTitleModalOpen}
        closeModal={closeTitleModal}
        autoClose={false}
      />
    </CourseStyled>
  );
};
