import { SAVE_COORDINATES, SAVE_CITY } from '../constants';
import { LocationState, Action } from '../../types';

export const initialState: LocationState = {
  coordinates: {
    latitude: 41.88273,
    longitude: -87.6234,
  },
  city: 'Chicago',
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SAVE_COORDINATES:
      return {
        ...state,
        coordinates: payload,
      };
    case SAVE_CITY:
      return {
        ...state,
        city: payload,
      };
    default:
      return state;
  }
};
