import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import SampleScreen from './src/screens/Sample';

const TabBar = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TabBar.Navigator initialRouteName="Home">
        <TabBar.Screen name="Home" component={HomeScreen} />
        <TabBar.Screen name="Sample" component={SampleScreen} />
      </TabBar.Navigator>
    </NavigationContainer>
  );
};

export default App;
