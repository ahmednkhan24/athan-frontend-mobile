import { FETCH_TODO, LOADED_TODO } from '../constants';

export const fetchTodos = () => ({
  type: FETCH_TODO,
});

export const loadedTodos = (todo: any = {}) => ({
  type: LOADED_TODO,
  payload: todo,
});
