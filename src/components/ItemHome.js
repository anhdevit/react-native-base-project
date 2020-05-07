/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ItemHome = ({ icon, title, customStyls }) => {
  return <View style={[styles.itemHome, customStyls]} >
    <Image source={icon} style={styles.icon}/>
    <Text style={styles.title}>{title}</Text>
  </View>
}

const styles = StyleSheet.create({
  itemHome: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  title: {
    marginLeft: 4
  },
  icon: {
    width: 16,
    aspectRatio: 1
  }
});

export default ItemHome;
