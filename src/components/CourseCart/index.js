import PropTypes from 'prop-types';

import { Button } from 'UI-KIT';

import { BtnContainer, CartContainer, CourseBody, CartTitle } from 'COMPONENTS/CourseCart/styles/CourseCartStyle';

export const CourseCart = ({ name, description, imageUrl }) => (
  <CartContainer>
    <CartTitle>
      {name}
      <img src={imageUrl} alt={name} />
    </CartTitle>
    <CourseBody>{description}</CourseBody>
    <BtnContainer>
      <Button fullWidth>Подробнее</Button>
    </BtnContainer>
  </CartContainer>
);

CourseCart.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

CourseCart.defaultProps = {
  name: 'Тут должно быть имя курса...',
  description: 'Тут должно быть описание курса...',
  imageUrl: 'Тут должно быть описание курса...',
};
