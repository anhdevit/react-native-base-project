/**
 * @format
 * @flow
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { stylesCommon } from 'src/data/theme/stylesCommon';
import FastImage from 'react-native-fast-image';

export function ItemCategory({ item }) {
  const {navigate} = useNavigation()
  return (
    <TouchableHighlight
      style={styles.container}
      // activeOpacity={0.8}
      onPress={() => navigate('detailProjectWeb', {item})}
    >
      <FastImage
        source={{uri: item.icon}}
        resizeMode={'contain'}
        style={styles.icon}
      />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    marginVertical: 10,
    ...stylesCommon.shadows
  },
  icon: {
    width: 64,
    aspectRatio: 1
  }
});

