import { Action } from './store';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type UseCoordinates = {
  coordinates: Coordinates | null;
  calculateCoordinates: () => any;
};

export type LocationState = {
  coordinates: Coordinates;
  city: string;
};

export type UseLocation = () => {
  location: LocationState;
  recalculateLocation: () => Action;
};

export type UseCity = {
  city: string | null;
  calculateCity: () => any;
};

export type LocationContextValues = UseCoordinates & UseCity & {};
