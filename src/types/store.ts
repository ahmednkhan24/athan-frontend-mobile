import { DefaultRootState } from 'react-redux';
import { LocationState } from './location';

export type Action = {
  type: string;
  payload?: any;
};

export type ActionCreator = (params?: any) => Action;

export interface RootState extends DefaultRootState {
  location: LocationState;
}
