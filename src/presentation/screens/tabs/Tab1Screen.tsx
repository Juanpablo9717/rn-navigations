import React from 'react';
import {View, Text} from 'react-native';
import HamburguerMenu from '../../components/shared/HamburguerMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1Screen</Text>
      <Icon name="rocket-outline" size={100} />
    </View>
  );
};

export default Tab1Screen;
