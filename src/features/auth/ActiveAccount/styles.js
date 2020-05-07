/**
 * @format
 * @flow
 */

import colors from '@config/colors';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  textForgot: {
    fontWeight: 'bold',
    fontSize: 26
  },
  textDescription: {
    fontSize: 15,
    marginTop: 16,
  },
  content: {
    flex: 1,
    marginHorizontal: 16
  },
  contentText: {
    width: '100%',
    marginTop: hp('5%'),
    marginBottom: 16
  },
  email: {
    marginTop: hp('5%'),
    borderWidth: 1,
    borderColor: '#F2AF1C'
  },
  button: {
    marginTop: 24
  },
});
