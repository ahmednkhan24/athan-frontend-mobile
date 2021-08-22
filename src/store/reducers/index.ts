import { combineReducers } from 'redux';
import locationReducers, {
  initialState as locationInitialState,
} from './locationReducers';

export const initialState = {
  location: { ...locationInitialState },
};

export default combineReducers({
  location: locationReducers,
});
