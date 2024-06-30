/* eslint-disable react/no-unstable-nested-components */
import {Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return <></>;
};

export default HamburguerMenu;
