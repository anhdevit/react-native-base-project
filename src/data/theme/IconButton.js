
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'src';


export default function IconButton({ assets, padding, onPress }) {
  return (
    <ThemeContext.Consumer>
      {
        (themeData) => (
          <TouchableOpacity onPress={onPress}>
            <View style={{
              padding: padding ?? 12
            }}>
              <Image source={assets} style={{ width: 24, height: 24 }} />
            </View>
          </TouchableOpacity>
        )
      }
    </ThemeContext.Consumer>
  );
};
