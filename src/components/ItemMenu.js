/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemMenu = ({ icon, customStyls, onPress }) => {
  return <TouchableOpacity
    style={[styles.itemHome, customStyls]}
    activeOpacity={8}
    onPress={onPress}
  >
    <Image source={icon} style={styles.icon} />
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  itemHome: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white',
    opacity: 0.8,
    marginRight: 16
  },
  icon: {
    tintColor: '#CE923E'
  }
});

export default ItemMenu;
