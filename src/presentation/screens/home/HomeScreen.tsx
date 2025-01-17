import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';
import HamburguerMenu from '../../components/shared/HamburguerMenu';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
