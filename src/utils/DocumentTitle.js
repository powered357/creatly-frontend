import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

export const DocumentTitle = ({ customTitle }) => (
  <Helmet>
    <title>{customTitle}</title>
  </Helmet>
);

DocumentTitle.propTypes = {
  customTitle: PropTypes.string,
};

DocumentTitle.defaultProps = {
  customTitle: 'Courses Platform',
};
