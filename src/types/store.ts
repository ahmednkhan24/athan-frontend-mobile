import { DefaultRootState } from 'react-redux';
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

export interface RootState extends DefaultRootState {
  location: LocationState;
}
