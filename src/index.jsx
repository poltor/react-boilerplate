import React from 'react';
import ReactDOM from 'react-dom';

import './polyfills';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

import './style.scss';


const store = configureStore({});
store.runSaga(rootSaga);


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

