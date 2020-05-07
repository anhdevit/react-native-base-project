/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import images from '@res/icons';

function BgSignIn() {
  return (
    <Image
      style={styles.backgroundSplash}
      source={images.bgSignIn}
      resizeMode='stretch'
    />
  );
};

const styles = StyleSheet.create({
  backgroundSplash: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});

export default BgSignIn;
