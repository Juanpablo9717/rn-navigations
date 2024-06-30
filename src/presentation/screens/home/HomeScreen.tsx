/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {Pressable, View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text>menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
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
