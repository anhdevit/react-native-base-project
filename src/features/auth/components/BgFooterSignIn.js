/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import images from '@res/icons';

function BgFooterSignIn() {
  return (
    <Image
      style={styles.backgroundSplash}
      source={images.bgLogin}
      resizeMode='stretch'
    />
  );
};

const styles = StyleSheet.create({
  backgroundSplash: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%'
  }
});

export default BgFooterSignIn;
