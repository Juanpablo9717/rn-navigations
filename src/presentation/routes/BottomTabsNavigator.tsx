/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {TopTabNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import IonIcon from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent', // To hide the 'line' behind the header on iOS
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <IonIcon name="file-tray-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Games',
          tabBarIcon: ({color}) => (
            <IonIcon name="game-controller-outline" color={color} />
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          headerShown: false,
          title: 'Music',
          tabBarIcon: ({color}) => (
            <IonIcon name="headset-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
