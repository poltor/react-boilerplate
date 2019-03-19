import { fork, all, takeEvery } from 'redux-saga/effects';

import cat from './ducks/cat/sagas';
import memes from './ducks/memes/sagas';


export default function* root() {
  yield all([
    ...memes,
    ...cat
  ]);
}
