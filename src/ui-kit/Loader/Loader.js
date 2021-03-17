import PropTypes from 'prop-types';

import { LoaderStyled, Spinner } from './styles/LoaderStyled';

export function Loader({ size }) {
  return (
    <LoaderStyled>
      <Spinner size={size} />
    </LoaderStyled>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
};

Loader.defaultProps = {
  size: 20,
};
