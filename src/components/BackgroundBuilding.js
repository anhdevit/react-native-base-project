/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import images from '../resources/icons';

function BackgroundBuilding() {
  return (
    <Image
      style={styles.backgroundSplash}
      source={images.backgroundSplash}
      resizeMode='stretch'
    />
  );
};

const styles = StyleSheet.create({
  backgroundSplash: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

export default BackgroundBuilding;
