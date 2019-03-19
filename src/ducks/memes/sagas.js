import { put, call, takeLeading, takeEvery } from 'redux-saga/effects';
import imgflipApi from './services/imgflipApi';
import { types, actions as memesActions } from './reducers';


export function* fetchMemes() {
  yield put(memesActions.requestMemes());

  try {
    const response = yield call(imgflipApi.getMemes);
    const memes = response.data.data.memes;
    yield put(memesActions.successMemes(memes));
  } catch(e) {
    yield put(memesActions.failureMemes());
  }
}

const watchAll = [
  takeEvery(types.FETCH, fetchMemes),
];

export default watchAll;
