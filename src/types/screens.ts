import { Route } from '@react-navigation/routers';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

export type ScreenProps = {
  route: Route<string>;
  navigation: BottomTabNavigationProp<any>;
};

export type ScreenOptions = (params: ScreenProps) => BottomTabNavigationOptions;
