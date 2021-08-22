import { Coordinates } from './location';

export type Action = {
  type: string;
  payload?: any;
};

export type ActionCreator = (params: any) => Action;

export type LocationState = {
  coordinates: Coordinates;
  city: string;
};

export type State = {
  location: LocationState;
};
