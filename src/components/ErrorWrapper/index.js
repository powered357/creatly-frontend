import PropTypes from 'prop-types';

import { ErrorStyled, ErrorText, ErrorImg } from './styles/ErrorStyled';

export const ErrorWrapper = ({ text }) => (
  <ErrorStyled>
    <ErrorText>{text}</ErrorText>
    <ErrorImg src="https://media.giphy.com/media/5eFp76zhsq3uw/giphy.gif" alt="Ron Swanson" />
  </ErrorStyled>
);

ErrorWrapper.propTypes = {
  text: PropTypes.string.isRequired,
};
