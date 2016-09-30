import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux'

import {decode} from './helpers/base64'

import routes from './routes.jsx'
import store from './store'

window.React = React;

const initialState = window.__INITIAL_STATE__ ? JSON.parse(decode(window.__INITIAL_STATE__)) : {};

const __store = store(initialState);

render(
  <Provider store={__store}>
    <Router history={browserHistory} routes={routes(__store)}/>
  </Provider>,
  document.getElementById('content')
);