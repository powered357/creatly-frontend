import PropTypes from 'prop-types';

import { LoaderStyled, Spinner } from './styles/LoaderStyled';

export function Loader({ size, padding, fullHeight }) {
  return (
    <LoaderStyled padding={padding} fullHeight={fullHeight}>
      <Spinner size={size} />
    </LoaderStyled>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
  padding: PropTypes.number,
  fullHeight: PropTypes.bool,
};

Loader.defaultProps = {
  size: 20,
  padding: 0,
  fullHeight: false,
};
