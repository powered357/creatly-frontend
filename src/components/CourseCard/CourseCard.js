import PropTypes from 'prop-types';

import { ROUTES } from 'CONSTANTS/routes';

import { Button, Link, Icon } from 'UI-KIT';

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
} from './styles/CourseCardStyle';

export const CourseCard = ({ id, name, description, imageUrl, published, isEditable }) => (
  <CardContainer>
    <Heading>
      <Title color={!published ? 'grey' : 'black'}>
        {name}
        {!published && <LockIcon />}
      </Title>
      {imageUrl && <img src={imageUrl} alt={name} />}
    </Heading>
    <Description>{description}</Description>
    {!isEditable ? (
      <BtnContainer>
        <Button fullWidth>Подробнее</Button>
      </BtnContainer>
    ) : (
      <EditGroup>
        <EditLink>
          <EditIcon>
            <Icon name="edit" size={20} />
          </EditIcon>
          <Link to={ROUTES.ADMIN.COURSE.MAIN.replace(':id', id)}>Редактировать</Link>
        </EditLink>
      </EditGroup>
    )}
  </CardContainer>
);

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
