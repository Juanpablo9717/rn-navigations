/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
  {id: 7, name: 'Product 7'},
  {id: 8, name: 'Product 8'},
  {id: 9, name: 'Product 9'},
];

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 30, marginBottom: 20}}>Products</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
            label={item.name}
          />
        )}
      />

      <Text style={{fontSize: 30, marginBottom: 20}}>Settings</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label={'Settings'}
      />
    </View>
  );
};

export default ProductsScreen;
