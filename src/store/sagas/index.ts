import { all } from 'redux-saga/effects';
import { fetchTodo } from './todoSagas';
import locationSagas from './locationSagas';

export default function* rootSaga() {
  yield all([fetchTodo(), ...locationSagas()]);
}
