import ReactDOM from 'react-dom';

import App from 'COMPONENTS/App';
import './style.scss';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.PROD_ENV) {
  console.log(
    `%cBuild date: ${new Date(process.env.BUILD_DATE)}`,
    'color: #7CDF64; font-family: "Courier New", sans-serif; font-size: 14px; font-weight: bold; padding: 5px 2px;',
  );
}
