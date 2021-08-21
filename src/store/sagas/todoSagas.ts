import { put, takeEvery } from 'redux-saga/effects';
import { loadedTodos } from '../actions';
import { FETCH_TODO } from '../constants';

export function* attemptToFetchTodo() {
  // @ts-ignore
  const apiResponse: any = yield fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
    .then((response) => response.json())
    .catch((err) => console.log('error while fetching todos: ', err));

  yield put(loadedTodos(JSON.stringify(apiResponse)));
}

export function* fetchTodo() {
  yield takeEvery(FETCH_TODO, attemptToFetchTodo);
}
