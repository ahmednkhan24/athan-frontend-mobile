import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import { LocationProvider } from '../contexts';
import { HigherOrderComponent } from '../types';

export const withProviders: HigherOrderComponent = (Component) => {
  const ProviderWrapper: React.FC = (props) => (
    <ReduxProvider store={store}>
      <LocationProvider>
        <Component props={props} />
      </LocationProvider>
    </ReduxProvider>
  );

  return ProviderWrapper;
};
