/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import images from '@res/icons';

function CityElement({ title, value, onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onSelect}>
        <Text style={styles.city}>{value}</Text>
        <Image source={images.ic_arrow_right} style={styles.icons}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  title: {
    color: '#242424',
    fontSize: 17,
    fontWeight: '600'
  },
  city: {
    fontSize: 15,
    color: '#242424',
    flex: 1
  },
  button: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 8,
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icons: {
    width: 16,
    aspectRatio: 1
  }
});

export default CityElement;
