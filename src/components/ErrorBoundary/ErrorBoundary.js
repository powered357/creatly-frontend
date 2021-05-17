import { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, msg) {
    console.error('ErrorBoundary caught an error', error, msg);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorWrapper text="Something went wrong :(" />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
