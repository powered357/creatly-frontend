import { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper } from 'COMPONENTS/ErrorWrapper';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, msg) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error', error, msg);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorWrapper text="Something went wrong" />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
