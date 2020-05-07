import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '@config/colors';
import { textStyles } from 'src/data/theme/ThemeData';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp('10%'),
  },
  bgLogin: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
  },
  rLogin: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  email: {
    marginTop: hp('8%'),
    borderWidth: 1,
    borderColor: '#F2AF1C',
  },
  password: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#F2AF1C',
  },
  button: {
    marginTop: hp('5%'),
  },
  register: {
    fontSize: 13,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  textForgot: {
    color: '#162B75',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  textSkip: {
    ...textStyles.LinkText,
    marginTop: 32,
    color: 'white'
  },
});
