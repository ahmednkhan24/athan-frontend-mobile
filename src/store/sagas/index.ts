import { all } from 'redux-saga/effects';
import { fetchTodo } from './todoSagas';
import { calculateCoordinates } from './locationSagas';

export default function* rootSaga() {
  yield all([fetchTodo(), calculateCoordinates()]);
}
