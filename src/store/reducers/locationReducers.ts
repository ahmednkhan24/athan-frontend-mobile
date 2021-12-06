import {
  IS_LOADING,
  SAVE_COORDINATES,
  SAVE_CITY,
  SAVE_TIMINGS,
} from '../constants';
import { LocationState, Action } from '../../types';

export const initialState: LocationState = {
  isLoading: false,
  coordinates: {
    latitude: 41.88273,
    longitude: -87.6234,
  },
  city: 'Chicago',
  timings: {
    Fajr: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
  },
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
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
    case SAVE_TIMINGS:
      return {
        ...state,
        timings: payload,
      };
    default:
      return state;
  }
};
