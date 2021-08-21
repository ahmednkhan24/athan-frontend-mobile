import { combineReducers } from 'redux';
import todoReducers, {
  initialState as todosInitialState,
} from './todoReducers';

export const initialState = {
  todos: { ...todosInitialState },
};

export default combineReducers({
  todos: todoReducers,
});
