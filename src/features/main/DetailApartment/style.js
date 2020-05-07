/**
 * @format
 * @flow
 */

import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '@config/colors';

export const stylesDetail = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#162B75',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    color: colors.colorPrimary,
    fontSize: 15,
  },
  icon: {
    tintColor: '#FDB913'
  },
  bg: {
    width: wp('100%'),
    height: hp('40%'),
    backgroundColor: colors.gray200
  },
  row: {
    width: '100%',
    height: hp('40%'),
  },
  body: {
    flex: 1,
    padding: 16
  },
  viewFooter: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    backgroundColor: '#162B75',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewNumberPage: {
    borderWidth: 0.3,
    borderRadius: 16,
    borderColor: '#7B7B7B',
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  numberPage: {
    color: '#7B7B7B',
    fontSize: 13,
  },
  itemHome: {
    marginLeft: 16,
  },
  viewItemMenu: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    flexDirection: 'row'
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8
  },
  titleprice: {
    fontSize: 15,
    color: '#242424'
  },
  price: {
    color: colors.colorPrimary,
    fontSize: 22,
    fontWeight: '600',
  },
  titleHome: {
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
    marginTop: 8
  },
  titleTrade: {
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
    color: '#162B75'
  },
  viewItemHome: {
    flexDirection: 'row',
    marginTop: 8
  },
  scene: {
    flex: 1,
    height: hp('100%')
  },
  buttonLinear: {
    width: wp('45%'),
  },
  styleLinear: {
    paddingVertical: 10
  },
  address: {
    marginLeft: 4
  },
  iconAddress: {
    width: 16,
    aspectRatio: 1
  }
});
