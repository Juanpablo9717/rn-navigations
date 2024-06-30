import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
