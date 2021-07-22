import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LocationProvider } from './src/contexts/LocationContext';
import Screens from './src/screens';

const App: React.FC = () => (
  <NavigationContainer>
    <LocationProvider>
      <Screens />
    </LocationProvider>
  </NavigationContainer>
);

export default App;
