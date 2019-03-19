import { fork, all, takeEvery } from 'redux-saga/effects';

import cat from './ducks/cat/sagas';


export default function* root() {
  yield all([
    ...cat
  ]);
}
