import {
  CALCULATE_COORDINATES,
  SAVE_COORDINATES,
  SAVE_CITY,
} from '../constants';

export const calculateCoordinates = () => ({
  type: CALCULATE_COORDINATES,
});

export const saveCoordinates = (coords: any) => ({
  type: SAVE_COORDINATES,
  payload: coords,
});

export const saveCity = (city: string) => ({
  type: SAVE_CITY,
  payload: city,
});
