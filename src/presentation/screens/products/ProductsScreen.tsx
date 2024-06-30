import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import PrimaryButton from '../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
  {id: 7, name: 'Producto 7'},
  {id: 8, name: 'Producto 8'},
  {id: 9, name: 'Producto 9'},
];

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 30, marginBottom: 20}}>Products</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product' as never)}
            key={item.id}
            label={item.name}
          />
        )}
      />

      <Text style={{fontSize: 30, marginBottom: 20}}>Settings</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label={'Settings'}
      />
    </View>
  );
};

export default ProductsScreen;
