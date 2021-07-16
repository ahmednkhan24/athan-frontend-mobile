import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HOME_SCREEN, SETTINGS_SCREEN } from '../constants';

export type TabBarIconsProps = {
  routeName: string;
  focused: boolean;
  color: string;
  size: number;
};

/*
 * Returns the corresponding Icon component for the specified route
 */
const TabBarIcons: React.FC<TabBarIconsProps> = ({
  routeName,
  focused,
  ...restOfProps
}) => {
  const determineIconName = () => {
    switch (routeName) {
      case HOME_SCREEN:
        return focused ? 'home' : 'home-outline';
      case SETTINGS_SCREEN:
        return focused ? 'settings' : 'settings-outline';
      default:
        return 'alert';
    }
  };

  return <Ionicons name={determineIconName()} {...restOfProps} />;
};
export default TabBarIcons;
