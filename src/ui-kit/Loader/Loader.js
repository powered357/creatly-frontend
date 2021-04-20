import PropTypes from 'prop-types';

import { LoaderStyled, Spinner } from './styles/LoaderStyled';

export function Loader({ size, fullHeight }) {
  return (
    <LoaderStyled fullHeight={fullHeight}>
      <Spinner size={size} />
    </LoaderStyled>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
  fullHeight: PropTypes.bool,
};

Loader.defaultProps = {
  size: 20,
  fullHeight: false,
};
