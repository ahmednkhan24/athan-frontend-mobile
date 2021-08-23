import {
  IS_LOADING,
  CALCULATE_COORDINATES,
  SAVE_COORDINATES,
  SAVE_CITY,
} from '../constants';
import { ActionCreator, Coordinates } from '../../types';

export const setIsLoading = (isLoading: boolean) => ({
  type: IS_LOADING,
  payload: isLoading,
});

export const calculateCoordinates: ActionCreator = () => ({
  type: CALCULATE_COORDINATES,
});

export const saveCoordinates: ActionCreator = (coords: Coordinates) => ({
  type: SAVE_COORDINATES,
  payload: coords,
});

export const saveCity: ActionCreator = (city: string) => ({
  type: SAVE_CITY,
  payload: city,
});
