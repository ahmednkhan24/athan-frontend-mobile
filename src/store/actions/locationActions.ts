import { CALCULATE_COORDINATES, SAVE_COORDINATES } from '../constants';

export const calculateCoordinates = () => ({
  type: CALCULATE_COORDINATES,
});

export const saveCoordinates = (coords: any) => ({
  type: SAVE_COORDINATES,
  payload: coords,
});
