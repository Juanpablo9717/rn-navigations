import React from 'react';
import {View, Text} from 'react-native';
import HamburguerMenu from '../../components/shared/HamburguerMenu';
import IonIcon from '../../components/shared/IonIcon';

const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon name="bluetooth" />
    </View>
  );
};

export default Tab1Screen;
