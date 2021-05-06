import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from 'CONSTANTS/routes';

import { deleteCourse } from 'STORE/admin';

import { Button, Link } from 'UI-KIT';

import { ModalConfirm } from 'COMPONENTS/ModalConfirm';

import { cutString } from 'UTILS/cutString';

import {
  BtnContainer,
  Description,
  Heading,
  Title,
  LockIcon,
  CardContainer,
  EditGroup,
  EditLink,
  EditIcon,
  DeleteIcon,
} from './styles/CourseCardStyled';

export const CourseCard = ({ id, name, description, imageUrl, published, isEditable }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isDeleting, setDeleting] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const DESCRIPTION_MAX_LENGTH = 300;

  const openConfirmModal = () => setConfirmModalOpen(true);

  const closeConfirmModal = useCallback(() => {
    setConfirmModalOpen(false);
  }, []);

  const navigateToCourse = () => {
    history.push(ROUTES.COURSE.INFO.replace(':id', id));
  };

  const handleDeleteCourse = () => {
    setDeleting(true);
    dispatch(deleteCourse(id));
  };

  return (
    <CardContainer>
      <Heading>
        <Title color={!published ? 'grey' : 'black'}>
          {name}
          {!published && <LockIcon />}
        </Title>
        {imageUrl && <img src={imageUrl} alt={name} />}
      </Heading>
      {description && <Description>{cutString(description, DESCRIPTION_MAX_LENGTH)}</Description>}
      {!isEditable ? (
        <BtnContainer>
          <Button onClick={navigateToCourse} fullWidth>
            Подробнее
          </Button>
        </BtnContainer>
      ) : (
        <EditGroup>
          <EditLink>
            <EditIcon />
            <Link to={ROUTES.ADMIN.COURSE.MAIN.replace(':id', id)}>Редактировать</Link>
          </EditLink>
          <EditLink>
            <DeleteIcon />
            <Link onClick={openConfirmModal} external>
              Удалить
            </Link>
          </EditLink>
        </EditGroup>
      )}
      {isEditable && (
        <ModalConfirm
          title="Вы уверены?"
          text="Вы правда хотите удалить этот курс? Его нельзя будет восстановить."
          isOpen={isConfirmModalOpen}
          closeModal={closeConfirmModal}
          successFunc={handleDeleteCourse}
          cancelFunc={closeConfirmModal}
          isLoading={isDeleting}
          autoClose={false}
        />
      )}
    </CardContainer>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  published: PropTypes.bool,
  isEditable: PropTypes.bool,
};

CourseCard.defaultProps = {
  id: null,
  name: null,
  description: null,
  imageUrl: null,
  published: true,
  isEditable: false,
};
