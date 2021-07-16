import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
  switch (routeName) {
    case HOME_SCREEN:
      return (
        <AntDesign name={`clockcircle${focused ? '' : 'o'}`} {...restOfProps} />
      );
    case SETTINGS_SCREEN:
      return (
        <Ionicons
          name={focused ? 'settings' : 'settings-outline'}
          {...restOfProps}
        />
      );
    default:
      return <Ionicons name="alert" {...restOfProps} />;
  }
};
export default TabBarIcons;
