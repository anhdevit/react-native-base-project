/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonIconVertical = ({ icon, title }) => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Image style={styles.icon} source={icon} />
      <Text
        style={styles.title}
      >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white'
  },
  icon: {
    tintColor: 'white'
  }
})

export default ButtonIconVertical;
