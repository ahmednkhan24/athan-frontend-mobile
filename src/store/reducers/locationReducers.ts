import { SAVE_COORDINATES } from '../constants';

export const initialState = {
  coordinates: {
    latitude: 41.88273,
    longitude: -87.6234,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };
    default:
      return state;
  }
};
