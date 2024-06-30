import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

const ProductScreen = () => {
  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          textAlign: 'center',
        }}>
        {id} - {name}
      </Text>
    </View>
  );
};

export default ProductScreen;
