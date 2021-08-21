import { LOADED_TODO } from '../constants';

export const initialState = {
  todos: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOADED_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
