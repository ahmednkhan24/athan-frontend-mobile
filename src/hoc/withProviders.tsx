import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import { HigherOrderComponent } from '../types';

export const withProviders: HigherOrderComponent = (Component) => {
  const ProviderWrapper: React.FC = (props) => (
    <ReduxProvider store={store}>
      <Component props={props} />
    </ReduxProvider>
  );

  return ProviderWrapper;
};
