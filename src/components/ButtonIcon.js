import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonIcon = ({ onPress, icon, style, styleImage }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} >
      <Image source={icon} style={[styleImage, styles.icon]} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  icon: {
  }
})

export default ButtonIcon
