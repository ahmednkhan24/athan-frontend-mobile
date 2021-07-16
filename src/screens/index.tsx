import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import SettingsScreen from './Settings';
import TabBarIcons from '../components/TabBarIcons';
import { HOME_SCREEN, SETTINGS_SCREEN } from '../constants';
import type { ScreenOptions } from '../types';

const TabBar = createBottomTabNavigator();

const screenOptions: ScreenOptions = ({ route, navigation }) => ({
  tabBarIcon: (props: any) => <TabBarIcons {...props} routeName={route.name} />,
});

const Screens: React.FC = () => (
  <>
    <TabBar.Navigator
      screenOptions={screenOptions}
      initialRouteName={HOME_SCREEN}
    >
      <TabBar.Screen name={HOME_SCREEN} component={HomeScreen} />
      <TabBar.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </TabBar.Navigator>
  </>
);

export default Screens;
