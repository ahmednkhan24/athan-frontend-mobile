import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './src/screens';

const App: React.FC = () => (
  <NavigationContainer>
    <Screens />
  </NavigationContainer>
);

export default App;
