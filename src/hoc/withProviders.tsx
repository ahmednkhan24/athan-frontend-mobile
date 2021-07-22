import React from 'react';
import { LocationProvider } from '../contexts';

export const withProviders: HigherOrderComponent = (Component) => {
  const ProviderWrapper: React.FC = (props) => (
    <LocationProvider>
      <Component props={props} />
    </LocationProvider>
  );

  return ProviderWrapper;
};
