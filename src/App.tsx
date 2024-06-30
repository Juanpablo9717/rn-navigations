import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './presentation/routes/StackNavigator';
import {DrawerNavigator} from './presentation/routes/DrawerNavigator';
import {BottomTabNavigator} from './presentation/routes/BottomTabsNavigator';

export default function App() {
  // <StackNavigator />
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}
