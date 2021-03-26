import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from 'UI-KIT';

import { BtnContainer, CourseBody, CardTitle, CardContainer } from './styles/CourseCardStyle';

export const CourseCard = ({ name, description, imageUrl, id }) => (
  <CardContainer>
    <CardTitle>
      {name}
      <img src={imageUrl} alt={name} />
    </CardTitle>
    <CourseBody>{description}</CourseBody>
    <BtnContainer>
      <Link to={`course/${id}`}>
        <Button fullWidth>Подробнее</Button>
      </Link>
    </BtnContainer>
  </CardContainer>
);

CourseCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.string,
};

CourseCard.defaultProps = {
  name: null,
  description: null,
  imageUrl: null,
  id: null,
};
