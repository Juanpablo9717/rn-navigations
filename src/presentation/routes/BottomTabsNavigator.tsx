/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
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
          title: 'Tab1',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab1 </Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab2 </Text>,
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab3 </Text>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
