/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  title: {
    color: colors.colorPrimary,
    alignSelf: 'center',
    fontSize: 22,
    marginTop: 16,
    fontWeight: 'bold'
  },
  textDescription: {
    fontSize: 15,
    marginTop: 16,
    textAlign: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp('10%')
  },
  button: {
    marginTop: hp('10%')
  },
});
