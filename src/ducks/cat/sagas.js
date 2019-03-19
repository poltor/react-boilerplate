import { put, call, takeLeading, takeEvery } from 'redux-saga/effects';
import theCatApi from './services/theCatApi';
import { types, actions as catActions } from './reducers';


export function* fetchCat() {
  yield put(catActions.requestCat());

  try {
    const response = yield call(theCatApi.fetchRandomCatPic);
    const pic = response.data[0].url;
    yield put(catActions.successCat(pic));
  } catch(e) {
    yield put(catActions.failureCat());
  }
}


const watchAll = [
  takeEvery(types.FETCH, fetchCat),
];

export default watchAll;
