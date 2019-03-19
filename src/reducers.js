import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cat from './ducks/cat/reducers';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  cat,
});

export default rootReducer;
