import { combineReducers } from 'redux';
import locationReducers, {
  initialState as locationInitialState,
} from './locationReducers';
import { State } from '../../types';

export const initialState: State = {
  location: { ...locationInitialState },
};

export default combineReducers({
  location: locationReducers,
});
