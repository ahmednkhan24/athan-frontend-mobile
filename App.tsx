import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';
import Screens from './src/screens';

const App: React.FC = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <Screens />
    </ReduxProvider>
  </NavigationContainer>
);

export default App;
