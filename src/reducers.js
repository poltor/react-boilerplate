import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cat from './ducks/cat/reducers';
import memes from './ducks/memes/reducers';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  cat,
  memes,
});

export default rootReducer;
