import { combineReducers } from 'redux';
import todoReducers, {
  initialState as todosInitialState,
} from './todoReducers';
import locationReducers, {
  initialState as locationInitialState,
} from './locationReducers';

export const initialState = {
  todos: { ...todosInitialState },
  location: { ...locationInitialState },
};

export default combineReducers({
  todos: todoReducers,
  location: locationReducers,
});
