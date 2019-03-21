import { combineReducers } from 'redux';

import cat from './ducks/cat/reducers';


const rootReducer = () => combineReducers({
  cat,
});

export default rootReducer;
