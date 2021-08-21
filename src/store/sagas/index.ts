import { all } from 'redux-saga/effects';
import { fetchTodo } from './todoSagas';

export default function* rootSaga() {
  yield all([fetchTodo()]);
}
