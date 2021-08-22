import { combineReducers } from 'redux';
import locationReducers, {
  initialState as locationInitialState,
} from './locationReducers';
import { RootState } from '../../types';

export const initialState: RootState = {
  location: { ...locationInitialState },
};

export default combineReducers({
  location: locationReducers,
});
