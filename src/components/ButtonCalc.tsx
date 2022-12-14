import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string,
  color?: string,
  ancho?: boolean,
  action: ( textNum: string ) => void,
}

const ButtonCalc = ({ text, color='#2D2D2D', ancho= false, action }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => action(text)}
    >
      <View style={{
      ...styles.button,
      backgroundColor: color,
      width: (ancho) ? 180 : 80
    }}>
      <Text style={{ 
        ...styles.buttonText,
        color: (color === '#9B9B9B') ? 'black' : 'white'
      }}>{text}</Text>
    </View>
    </TouchableOpacity>    
  )
}

export default ButtonCalc;
