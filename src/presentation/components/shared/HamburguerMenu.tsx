/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import IonIcon from './IonIcon';
import {globalColors} from '../../theme/theme';

const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu" color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, [navigation]);

  return <></>;
};

export default HamburguerMenu;
