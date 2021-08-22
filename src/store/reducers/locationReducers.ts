import { SAVE_COORDINATES, SAVE_CITY } from '../constants';

export const initialState = {
  coordinates: {
    latitude: 41.88273,
    longitude: -87.6234,
  },
  city: 'Chicago',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };
    case SAVE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
