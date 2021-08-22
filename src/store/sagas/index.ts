import { all } from 'redux-saga/effects';
import locationSagas from './locationSagas';

export default function* rootSaga() {
  yield all([...locationSagas()]);
}
