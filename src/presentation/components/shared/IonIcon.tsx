import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ionicGlyphmap from 'react-native-vector-icons/glyphmaps/Ionicons.json';

interface Props {
  name: keyof typeof ionicGlyphmap;
  size?: number;
  color?: string;
}
const IonIcon = ({name, size = 30, color = 'black'}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default IonIcon;
