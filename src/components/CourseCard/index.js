import PropTypes from 'prop-types';

import { Button } from 'UI-KIT';

import { BtnContainer, CourseBody, CardTitle, CardContainer } from './styles/CourseCardStyle';

export const CourseCard = ({ name, description, imageUrl }) => (
  <CardContainer>
    <CardTitle>
      {name}
      <img src={imageUrl} alt={name} />
    </CardTitle>
    <CourseBody>{description}</CourseBody>
    <BtnContainer>
      <Button fullWidth>Подробнее</Button>
    </BtnContainer>
  </CardContainer>
);

CourseCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

CourseCard.defaultProps = {
  name: null,
  description: null,
  imageUrl: null,
};
