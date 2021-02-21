import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'STORE';

import App from 'COMPONENTS/App';
import { ErrorBoundary } from 'COMPONENTS/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

if (process.env.PROD_ENV) {
  console.log(
    `%cBuild date: ${new Date(process.env.BUILD_DATE)}`,
    'color: #7CDF64; font-family: "Courier New", sans-serif; font-size: 14px; font-weight: bold; padding: 5px 2px;',
  );
}
