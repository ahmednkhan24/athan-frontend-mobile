import {
  IS_LOADING,
  CALCULATE_COORDINATES,
  SAVE_COORDINATES,
  SAVE_CITY,
  SAVE_TIMINGS,
} from '../constants';
import { ActionCreator, Coordinates, Timings } from '../../types';

export const setIsLoading = (isLoading: boolean) => ({
  type: IS_LOADING,
  payload: isLoading,
});

export const calculateCoordinates: ActionCreator = () => ({
  type: CALCULATE_COORDINATES,
});

export const saveCoordinates = (coords: Coordinates) => ({
  type: SAVE_COORDINATES,
  payload: coords,
});

export const saveCity = (city: string) => ({
  type: SAVE_CITY,
  payload: city,
});

export const saveTimings = (timings: Timings) => ({
  type: SAVE_TIMINGS,
  payload: timings,
});
