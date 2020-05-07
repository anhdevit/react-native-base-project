/**
 * @format
 * @flow
 */

import ListImage from '@components/ListImage';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { BannerModel } from 'src/data/model/HomeModel';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '@config/colors';
import { getTopBanner } from '../homeSlice';
import { navigate } from '@navigation/RootNavigation';

function HeaderHome() {
  const [topBanner, setTopBanner] = useState([]);

  const getData = async () => {
    try {
      const data = await getTopBanner()
      const dataBanner = data.map(item => new BannerModel(item))
      setTopBanner(dataBanner)
    } catch (error) {
      console.log("getData -> error", error)
    }
  }

  const onPressBanner = (index) => {
   const item = topBanner[index]
   navigate('detailProjectWeb', {item})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ListImage
      data={topBanner}
      styleContainer={styles.container}
      onPress={onPressBanner}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp('35%'),
    width: wp('100%'),
    backgroundColor: colors.gray200
  },
});


export default HeaderHome;
