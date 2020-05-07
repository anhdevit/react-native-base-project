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
  content: {
    flex: 1,
    marginHorizontal: wp('5%'),
    borderWidth: 0.5,
    borderColor: colors.colorPrimary,
    marginVertical: 16,
    padding: 16,
    borderRadius: 8
  },
  password: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#F2AF1C'
  },
  button: {
    marginTop: hp('5%')
  },
  textWithLink: {
    alignSelf: 'center',
    marginTop: 16
  }
});

