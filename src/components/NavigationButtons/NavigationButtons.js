import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  NavigationStyled,
  NavigationButton,
  ButtonText,
  PrevIcon,
  NextIcon,
  EmptyElement,
} from './styles/NavigationStyled';

export const NavigationButtons = ({ prevRoute, nextRoute }) => {
  const history = useHistory();

  const navigateTo = (route) => () => history.push(route);

  return (
    <NavigationStyled>
      {prevRoute && (
        <NavigationButton onClick={navigateTo(prevRoute)}>
          <PrevIcon />
          <ButtonText>Предыдущий урок</ButtonText>
        </NavigationButton>
      )}
      <EmptyElement />
      {nextRoute && (
        <NavigationButton onClick={navigateTo(nextRoute)}>
          <ButtonText>Следующий урок</ButtonText>
          <NextIcon />
        </NavigationButton>
      )}
    </NavigationStyled>
  );
};

NavigationButtons.propTypes = {
  prevRoute: PropTypes.string,
  nextRoute: PropTypes.string,
};

NavigationButtons.defaultProps = {
  prevRoute: '',
  nextRoute: '',
};
