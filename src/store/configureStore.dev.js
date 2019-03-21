import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware, { END } from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';


export const history = createBrowserHistory();


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const store = createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(history)),
      DevTools.instrument(),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
