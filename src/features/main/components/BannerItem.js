/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { stylesCommon } from 'src/data/theme/stylesCommon';
import colors from '@config/colors';

function BannerItem({ url, styleCustom, styleBg }) {
  return (
    <TouchableOpacity
      style={[styles.container, styleCustom]}
      activeOpacity={1}
    >
      <FastImage source={{uri: 'https://media.anhdevs.vn/storage/anhdevs-2018/bds-ban/marina/anhdevs-marina-hero.jpg'}} style={[styles.bg, styleBg]} resizeMode='cover' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginVertical: 10,
    ...stylesCommon.shadows
  },
  bg: {
    flex: 1,
    borderRadius: 6,
    width: wp('85%'),
    height: hp('30%'),
    backgroundColor: colors.gray200
  },
});

export default BannerItem;
