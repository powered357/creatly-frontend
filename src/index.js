import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'STORE';

import GlobalStyle from 'THEME/global';

import { App } from 'COMPONENTS/App';
import { ErrorBoundary } from 'COMPONENTS/ErrorBoundary';

import { loadFonts } from 'UTILS/loadFonts';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
  loadFonts,
);

if (process.env.PROD_ENV) {
  console.log(
    `%cBuild date: ${new Date(process.env.BUILD_DATE)}`,
    'color: #7CDF64; font-family: "Courier New", sans-serif; font-size: 14px; font-weight: bold; padding: 5px 2px;',
  );
}
