import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import '../src/styles';
import '../src/styles/scss';
import App from './containers/app';
import { store } from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './helpers/testing/serviceWorker';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();