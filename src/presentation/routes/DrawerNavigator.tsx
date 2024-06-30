/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {BottomTabNavigator} from './BottomTabsNavigator';
import IonIcon from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimentions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimentions.width > 769 ? 'permanent' : 'slide',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          paddingHorizontal: 20,
          borderRadius: 100,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          title: 'All Navigations',
          drawerIcon: ({color}) => (
            <IonIcon name="planet-outline" color={color} />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-circle-outline" color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          backgroundColor: globalColors.primary,
          borderRadius: 50,
          height: 200,
          margin: 30,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
